<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container>

      <b-row>
        <b-col>
          <Network />
          <LocalBrowser />
        </b-col>

        <b-col>
          <div v-if="webId == null">
            <b-form-select v-model="issuer" :options="issuers"></b-form-select>

            <b-button  @click="login">Login</b-button>
          </div>
          <b-button v-else @click="logout">Logout</b-button>

          <div v-if="webId != null">
            Name: {{ name }}<br>
            WebId : <a :href="'https://podbrowser.inrupt.com/resource/'+webId" target="_blank">{{ webId}}</a><br>
            storage : {{ podStorage}}<br><br>
            <PodStorage />
          </div>
        </b-col>

      </b-row>
    </b-container>

  </div>
</template>

<script>
import { handleIncomingRedirect, login, fetch, getDefaultSession, onSessionRestore } from '@inrupt/solid-client-authn-browser'
import { getSolidDataset, getThing, getStringNoLocale, getUrlAll, getUrl /*saveSolidDatasetAt*/ } from "@inrupt/solid-client";
import { FOAF /*, VCARD */} from "@inrupt/vocab-common-rdf";
import { WS /*, VCARD */} from "@inrupt/vocab-solid-common";
// import * as common from "@inrupt/vocab-common-rdf";
// import * as inrupt from "@inrupt/vocab-inrupt-common"
// import * as solid from "@inrupt/vocab-solid-common"
// console.log("vocabs",common, inrupt, solid)
//import * as jsonld from 'jsonld';
import Network from "@/components/storage/Network"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components :  {
    Network,
    // 'Network' :  () => import ( '@/components/storage/Network' ),
    'PodStorage' :  () => import ( '@/components/storage/PodStorage' ),
    'LocalBrowser' :  () => import ( '@/components/storage/LocalBrowser' ),
  },
  data(){
    return {
      issuers: [

        { value: null, text: 'Please select an issuer' },
        { value: "https://broker.pod.inrupt.com", text: 'Broker Pod Inrupt (Entreprise Solid Server)' },
        { value: "https://inrupt.net", text: 'Inrupt.net' },
        { value: "https://solidcommunity.net", text: 'SolidCommunity.net' },
        { value: "https://solidweb.org", text: 'Solidweb.org' }
      ],
      issuer: null,
      webId: null,
      podStorage: null,
      name: null
    }
  },
  async mounted(){
    //  this.loginAndFetch();
    console.log(getDefaultSession())

    // getDefaultSession().on('login', function (e){alert("logged", e)})

    onSessionRestore((url) => {
      console.log("restore",url)
    });

    let logged = await getDefaultSession().info.isLoggedIn
    console.log("logged", logged)
    await handleIncomingRedirect({restorePreviousSession : true}).then((info) => {
      console.log(`Logged in with WebID [${info.webId}]`)
    })
    await this.fetch()
  },
  watch:{
    session(){
      console.log("SESSION", this.session)
    }
  },
  computed: {
    session(){
      return getDefaultSession()
    }
  },
  methods:{
    async logout(){
      console.log(getDefaultSession())
      await getDefaultSession().logout()
      await this.fetch()
    },

    async fetch(){
      console.log("fetch")
      let logged = await getDefaultSession().info.isLoggedIn
      console.log("logged", logged)
      if (!getDefaultSession().info.isLoggedIn) {
        console.log("not logged")
        this.webId = null
        this.podStorage = null
        this.$store.dispatch('setPodStorage', this.podStorage)
        //  await this.login()
      }else{
        console.log("webId", getDefaultSession().info.webId)

        this.webId = getDefaultSession().info.webId
        // 3. Make authenticated requests by passing `fetch` to the solid-client functions.
        // The user must have logged in as someone with the appropriate access to the specified URL.

        // For example, the user must be someone with Read access to the specified URL.
        const myDataset = await getSolidDataset(
          getDefaultSession().info.webId, {
            fetch: fetch
          });
          console.log(getDefaultSession())
          console.log(myDataset)

          const profile = getThing(
            myDataset,
            getDefaultSession().info.webId
          );

          console.log("profile",profile)

          this.name = getStringNoLocale(profile, FOAF.name);
          console.log("name",this.name)

          const acquaintances = getUrlAll(profile, FOAF.knows);
          console.log("acquaintances", acquaintances)

          // profile._quads.forEach((q) => {
          //   console.log(q)
          // });


          this.podStorage = getUrl(profile, WS.storage);
          console.log("storage", this.podStorage)
          this.$store.dispatch('setPodStorage', this.podStorage)


          // let documentLoaderType = 'xhr'
          // await jsonld.useDocumentLoader(documentLoaderType/*, options*/);
          // this.doc = await jsonld.documentLoader(getDefaultSession().info.webId, function(err) {
          //   if(err) {
          //     alert(err)
          //   }
          // })
          // this.doc.jsonld = JSON.parse(this.doc.document)
          //
          // //  console.log(this.doc)
          //
          // this.storage = this.doc.jsonld['@graph'][1].storage
          // console.log("storage", this.storage)
          // this.$store.commit('setStorage', this.storage)
        }

      },
      async login() {
        // 1. Call the handleIncomingRedirect() function to complete the authentication process.
        //   If the page is being loaded after the redirect from the Solid Identity Provider
        //      (i.e., part of the authentication flow), the user's credentials are stored in-memory, and
        //      the login process is complete. That is, a session is logged in
        //      only after it handles the incoming redirect from the Solid Identity Provider.
        //   If the page is not being loaded after a redirect from the Solid Identity Provider,
        //      nothing happens.

        console.log(this.issuer)
        // 2. Start the Login Process if not already logged in.

        // The `login()` redirects the user to their identity provider;
        // i.e., moves the user away from the current page.
        if (this.issuer != null){
          await login({
            // Specify the URL of the user's Solid Identity Provider; e.g., "https://broker.pod.inrupt.com" or "https://inrupt.net"

            oidcIssuer: this.issuer,
            // Specify the URL the Solid Identity Provider should redirect to after the user logs in,
            // e.g., the current page for a single-page app.
            redirectUrl: window.location.href,
            // Pick an application name that will be shown when asked
            // to approve the application's access to the requested data.
            clientName: "Vatch",
            // Specify the app WebID so that the Solid Identity Provider can verify login information.
            //clientId: "https://my-app.domain/profile#app"





          });

          await this.fetch()
        }




        // ...

        // For example, the user must be someone with Write access to the specified URL.
        // const savedSolidDataset = await saveSolidDatasetAt(
        //   "https://pod.inrupt.com/docsteam/profile/card",
        //   myChangedDataset, {
        //     fetch: fetch
        //   });
      }


    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
