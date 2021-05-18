<template>
  <div>
    <h3>PodStorage</h3>{{ podStorage }}
    {{ things.length}}


    <Toolbar environnement="pod" />


    <b-list-group @contextmenu.prevent="$refs.ctxMenu.open">
      <b-list-group-item href="#" variant="success" @click="loadRoot()">{{podStorage}}</b-list-group-item>

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
    'Toolbar' :  () => import ( '@/components/storage/Toolbar' ),
    'contextMenu' : () => import('vue-context-menu'),
  },
  data(){
    return {
      //  things: []
    }
  },
  created(){
    this.things = this.$store.state.things
    console.log("things", this.things)
  },
  methods:{
    async loadRoot(){
      this.$store.dispatch('setCurrentThingUrl', this.podStorage)
    },
    doSomething(e){
      console.log(e)
    }
  },
  watch:{
    podStorage(){
      console.log("Pod Storage", this.podStorage)
    },
    things(){
      console.log("Watch things", this.things)
    }
  },
  computed:{
    podStorage:{
      get () { return this.$store.state.podStorage},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    things:{
      get () { return this.$store.state.things},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
