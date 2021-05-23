<template>
  <b-button @click="doTheTag" size="sm" variant="outline-success">tag</b-button>
</template>

<script>
export default {
  name: 'TagButton',
  props: ['path'],
  methods:{
    doTheTag(){
      this.$store.commit('vatch/setResourceToTag', this.path)
    }
  }
}
</script>

<style>

</style>
