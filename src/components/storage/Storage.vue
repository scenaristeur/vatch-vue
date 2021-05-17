<template>
  <div>
    Storage<br><br>

    STOSTOSTO {{ storage }}
    {{ things.length}}
    <b-list-group>
      <b-list-group-item href="#" variant="success" @click="loadRoot()">{{storage}}</b-list-group-item>

      <StorageItem v-for="thing of things" :key="thing.internal_url"  :item="thing" />
    </b-list-group>


  </div>
</template>

<script>
//import * as jsonld from 'jsonld';



export default {
  name: 'Storage',
  components :  {
    'StorageItem' :  () => import ( '@/components/storage/StorageItem' ),
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
      this.$store.dispatch('setCurrentThingUrl', this.storage)
    },
  },
  watch:{
    storage(){
      console.log("storage ST", this.storage)
    },
   things(){
      console.log("Watch things", this.things)
    }
  },
  computed:{
    storage:{
      get () { return this.$store.state.storage},
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
