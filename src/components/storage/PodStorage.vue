<template>
  <div>
    <h3>PodStorage</h3>{{ podStorage }}
    {{ things.length}}
    <b-list-group>
      <b-list-group-item href="#" variant="success" @click="loadRoot()">{{podStorage}}</b-list-group-item>

      <StorageItem v-for="thing of things" :key="thing.internal_url"  :item="thing" />
    </b-list-group>


  </div>
</template>

<script>
//import * as jsonld from 'jsonld';



export default {
  name: 'PodStorage',
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
      this.$store.dispatch('setCurrentThingUrl', this.podStorage)
    },
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
