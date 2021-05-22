<template>
  <b-button @click="doTheTag" size="sm" variant="outline-success">tag</b-button>
</template>

<script>
export default {
  name: 'TagButton',
  props: ['path'],
  methods:{
    doTheTag(){
      this.$store.commit('vatch/SetResourceToTag', this.path)
    }
  }
}
</script>

<style>

</style>
