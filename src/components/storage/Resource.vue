<template>
  <b-list-group-item href="#" @click="loadResource" class="d-flex" @contextmenu.prevent="openContext">
    <div class="mr-3">
      <!--  why mr-3 does not work ? -->
    <b-icon v-if="resource.endsWith('/')" icon="folder-fill" variant="warning"></b-icon>
    <b-icon v-else icon="file-earmark-richtext" variant="info"></b-icon>
    </div>
  <span>  {{decodeURIComponent(resource)}}</span>
    <!-- <small>  {{item}}</small> -->

    <context-menu id="context-menu" ref="ctxMenu">
      <b-list-group>
        <b-list-group-item  href="#" @click="doSomething('delete')" class="d-flex justify-content-between align-items-center">
          <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
          Delete
        </b-list-group-item>
        <b-list-group-item  href="#" @click="doSomething('1')">option 1 P</b-list-group-item>
        <b-list-group-item  href="#" @click="doSomething('2')">option 2</b-list-group-item>
        <b-list-group-item  href="#" @click="doSomething('3')">option 3</b-list-group-item>
      </b-list-group>
    </context-menu>

  </b-list-group-item>
</template>

<script>
export default {
name: "Resource",
props: ['resource'],
components :  {
  'contextMenu' : () => import('vue-context-menu'),
},
methods:{
  async loadResource(){
    this.$store.dispatch('solid/setCurrentThingUrl', this.resource)
  },
  openContext(){
    this.$refs.ctxMenu.open()
  },
  doSomething(e){
    let answer = false
    switch (e) {
      case 'delete':
      console.log("delete", this.resource)
      answer = confirm("Are you sure you want to delete "+this.resource);
      if (answer == true)
      {
        this.$store.dispatch('solid/deleteOnPod', this.resource)
      }


      break;
      default:
      console.log(e)
    }

  }
}
}
</script>

<style>

</style>
