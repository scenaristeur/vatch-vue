<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container>

      <b-row>
        <b-col>
          <Network />
          <Editor />
          <LocalBrowser />
        </b-col>

        <b-col>
          <Login />
          <!-- <div v-if="webId == null">
          <b-form-select v-model="issuer" :options="issuers"></b-form-select>

          <b-button  @click="login">Login</b-button>
        </div>
        <b-button v-else @click="logout">Logout</b-button> -->



        <PodStorage />

      </b-col>

    </b-row>
  </b-container>
  <Input />
</div>
</template>

<script>

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
    'Input' :  () => import ( '@/components/Input' ),
    'Editor' :  () => import ( '@/components/editor/Editor' ),
    'Login': () => import('@/components/solid/Login')
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
