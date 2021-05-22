<template>
  <b-modal id="bv-modal-profile" size="lg">
    <Login />
    Name: {{ pod.name }}<br>
    WebId : <a :href="pod.webId" target="_blank">{{ pod.webId}}</a>  <a href="https://podbrowser.inrupt.com/" target="_blank">Pod Browser</a><br>

    Friends:
    <b-list-group>
      <Friend v-for="f in pod.friends" :key="f.webId" :friend="f" />
    </b-list-group>
  </b-modal>
</template>

<script>
export default {
  name: 'Profile',
  components :  {
    'Login': () => import('@/components/solid/Login'),
    'Friend': () => import('@/components/solid/Friend')
  },
  computed:{
    pod:{
      get () { return this.$store.state.solid.pod},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }

}
</script>

<style lang="css" scoped>
</style>
