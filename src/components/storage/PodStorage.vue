<template>
  <div v-if="pod != null">
    <h3>PodStorage</h3>
    Name: {{ pod.name }}<br>
    WebId : <a :href="'https://podbrowser.inrupt.com/resource/'+pod.webId" target="_blank">{{ pod.webId}}</a><br>
    storage : {{ pod.storage}}   {{ things.length}}<br><br>




    <!-- <Toolbar environnement="pod" /> -->


    <b-list-group @contextmenu.prevent="$refs.ctxMenu.open">
      <b-list-group-item href="#" variant="success" @click="loadRoot()">{{pod.storage}}</b-list-group-item>

      <StorageItem v-for="thing of things" :key="thing.internal_url"  :item="thing" />
    </b-list-group>

    <context-menu id="context-menu" ref="ctxMenu">
      <b-list-group>
        <b-list-group-item  href="#" @click="doSomething('1')">option 1 P</b-list-group-item>
        <b-list-group-item  href="#" @click="doSomething('2')">option 2</b-list-group-item>
        <b-list-group-item  href="#" @click="doSomething('3')">option 3</b-list-group-item>
      </b-list-group>
    </context-menu>

  </div>
</template>

<script>
//import * as jsonld from 'jsonld';



export default {
  name: 'PodStorage',
  components :  {
    'StorageItem' :  () => import ( '@/components/storage/StorageItem' ),
    // 'Toolbar' :  () => import ( '@/components/storage/Toolbar' ),
    'contextMenu' : () => import('vue-context-menu'),
  },
  data(){
    return {
      //  things: []
    }
  },
  created(){
    this.pod = this.$store.state.solid.pod
    this.things = this.$store.state.solid.things
    console.log("things", this.things)
  },
  methods:{
    async loadRoot(){
      this.$store.dispatch('solid/setCurrentThingUrl', this.pod.storage)
    },
    doSomething(e){
      console.log(e)
    }
  },
  watch:{
    pod(){
      console.log("Pod", this.pod)
    },
    things(){
      console.log("Watch things", this.things)
    }
  },
  computed:{
    pod:{
      get () { return this.$store.state.solid.pod},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    things:{
      get () { return this.$store.state.solid.things},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
