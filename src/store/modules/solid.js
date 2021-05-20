import { getSolidDataset, getThingAll,
  getFile,
  isRawData,
  getContentType,
  saveFileInContainer,
  getSourceUrl, deleteFile/* getStringNoLocale, getUrlAll*/ /*saveSolidDatasetAt*/ } from "@inrupt/solid-client";
  import { handleIncomingRedirect, login, fetch, getDefaultSession, onSessionRestore,/* getSessionIdFromStorageAll,*/ /*getSessionFromStorage */ } from '@inrupt/solid-client-authn-browser'
  import {  getThing, getStringNoLocale, getUrlAll, getUrl /*saveSolidDatasetAt*/ } from "@inrupt/solid-client";
  import { FOAF /*, VCARD */} from "@inrupt/vocab-common-rdf";
  import { WS /*, VCARD */} from "@inrupt/vocab-solid-common";

  const state = () => ({
    session: null,
    pod: null,
  })

  const actions = {
    async checkSessions({commit, dispatch}, params){
      console.log(params)

      await handleIncomingRedirect({restorePreviousSession : params.restore}).then((info) => {
        console.log(`Logged in with WebID [${info.webId}]`)
        console.log(info)
      })

      let session = getDefaultSession()
      console.log(session)
      onSessionRestore((url) => {
        console.log("restore",url)
      });
      commit('setSession',session)
      dispatch('getPodInfos', session)
    },

    async uploadLocalToPod(context,params){

      console.log(params)

      // import { overwriteFile } from "@inrupt/solid-client";
      //
      // const savedFile = await overwriteFile(
      //   "https://example.com/some/new/file",
      //   new Blob(["This is a plain piece of text"], { type: "plain/text" })
      //   // Or in Node:
      //   // Buffer.from("This is a plain piece of text", "utf8"), { type: "plain/text" })
      // );
      // console.log("File saved!");


      const savedFile = await saveFileInContainer(
        params.dest,
        new Blob(["This is a plain piece of text"], { type: "plain/text" }),
        { slug: "new-file", fetch: fetch }
      );

      console.log(`File saved at ${getSourceUrl(savedFile)}`);
    },
    async setCurrentThingUrl(context, url){




      const file = await getFile(
        url
      );
      // file is a Blob (see https://developer.mozilla.org/docs/Web/API/Blob)
      console.log(
        `Fetched a ${getContentType(file)} file from ${getSourceUrl(file)}.`
      );
      console.log(`The file is ${isRawData(file) ? "not " : ""}a dataset.`);




      context.commit('setCurrentRemoteUrl',url)
      const myDataset = await getSolidDataset(
        url, {
          fetch: fetch
        });
        console.log(myDataset)
        const things = await getThingAll(
          myDataset,
          url
        );
        console.log("Things", things)
        //  this.things = things
        context.commit('setThings',things)
        // let documentLoaderType = 'xhr'
        // await jsonld.useDocumentLoader(documentLoaderType/*, options*/);
        // this.doc = await jsonld.documentLoader(this.storage, function(err) {
        //   if(err) {
        //     alert(err)
        //   }
        // })
        // this.doc.jsonld = JSON.parse(this.doc.document)
        //
        // console.log(this.doc)
        //  }

      },
      async deleteOnPod(context, params){
        console.log(params)
        await deleteFile(
          "https://example.com/some/boring/file", { fetch: fetch }
        );
        console.log("File deleted !");
      },

      async login(context, issuer) {
          await login({
          oidcIssuer: issuer,
          redirectUrl: window.location.href,
          clientName: "Vatch",
        });
      },

      async logout(context, params){
        let session = getDefaultSession()
        console.log(params)
        await session.logout()
        context.commit('setSession',session)
        context.commit('setPod', {})
      },

      async getPodInfos(context, session){
        let pod = {}
        pod.logged = session.info.isLoggedIn
        if (pod.logged) {
          pod.webId = session.info.webId
          const myDataset = await getSolidDataset( pod.webId, { fetch: fetch });
            pod.profile = getThing( myDataset, pod.webId );
            pod.name = getStringNoLocale(pod.profile, FOAF.name);
            pod.acquaintances = getUrlAll(pod.profile, FOAF.knows);
            pod.storage = getUrl(pod.profile, WS.storage);
          }
          context.commit('setPod', pod)
        },
      }

      const mutations = {
        setPod(state,p){
          console.log(p)
          state.pod = p
        },
        setSession(state, s){
          console.log(s)
          state.session = s
        },
      }

      export default {
        namespaced: true,
        state,
        actions,
        mutations
      }
