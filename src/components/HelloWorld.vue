<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <b-container class="mb-5">

      <b-row>
        <b-col>
          <Network />
          <Editor />
          <LocalBrowser />
        </b-col>

        <b-col>

          <!-- <div v-if="webId == null">
          <b-form-select v-model="issuer" :options="issuers"></b-form-select>

          <b-button  @click="login">Login</b-button>
        </div>
        <b-button v-else @click="logout">Logout</b-button> -->


        <Things />
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
    'Things' :  () => import ( '@/components/storage/Things' ),
    'LocalBrowser' :  () => import ( '@/components/storage/LocalBrowser' ),
    'Input' :  () => import ( '@/components/Input' ),
    'Editor' :  () => import ( '@/components/editor/Editor' ),

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
