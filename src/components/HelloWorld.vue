<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <b-container class="mb-5">
      <b-row>
        <b-col>
          <LocalBrowser />
        </b-col>
        <b-col>
        <PassportPassword />



          <PodStorage />
        </b-col>
      </b-row>
      <Network />
    </b-container>
    <Things />
    <Editor />
    <Tag />
    <Input />
  </div>
</template>

<script>

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
    'Tag' :  () => import ( '@/components/social/Tag' ),
    'PassportPassword' :  () => import ( '@/views/passport/PassportPassword' )

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
