<template>
  <div> WebsocketNotification<br>

    {{message}}
    {{pod}}
  </div>
</template>

<script>
export default {
  name:"Websocket",
  data(){
    return{
      message: "waiting"
    }
  },
  created(){
    this.subscribe(this.$store.state.solid.pod.storage)
  },
  methods:{
    subscribe(url){
      console.log("subscribe to",url)
      this.$subscribe(url)
    }
  },
  watch:{
    pod(p){
      this.subscribe(p.storage)
    }
  },
  computed:{
    pod:{
      get () { return this.$store.state.solid.pod},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
