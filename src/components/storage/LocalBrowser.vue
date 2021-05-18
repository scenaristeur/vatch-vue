<template>
  <div>
    <h3>Local Browser Events</h3>


    <Toolbar environnement="local" />

    <b-list-group v-if="localResources.length > 0">
      <b-list-group-item href="#" v-for="(lr, i) in localResources" :key="i" @contextmenu.prevent="$refs.ctxMenuItem.open">
        {{lr}}
      </b-list-group-item>


    </b-list-group>
    <div v-else>
      please install <a href="https://github.com/scenaristeur/vatch" target="_blank">vatch server</a> on your local machine.
      <br>

      <code style="text-align:left" variant="success"><pre>
        git clone https://github.com/scenaristeur/vatch.git
        cd vatch
        // git submodule update --recursive --remote for later updates
        git submodule update --init --recursive
        npm install
        node .

      </pre>
    </code>
  </div>

  <!-- <context-menu id="context-menu" ref="ctxMenu">
  <b-list-group>
  <b-list-group-item  href="#" @click="doSomething('1')">option 1 L</b-list-group-item>
  <b-list-group-item  href="#" @click="doSomething('2')">option 2</b-list-group-item>
  <b-list-group-item  href="#" @click="doSomething('3')">option 3</b-list-group-item>
</b-list-group>
</context-menu> -->


<context-menu id="context-menu-item" ref="ctxMenuItem">

  <b-list-group-item  href="#" @click="doSomething('1')" class="d-flex justify-content-between align-items-center">  <b-icon icon="pencil-square" scale="2" variant="info"></b-icon>Edit</b-list-group-item>
  <b-list-group-item  href="#" @click="doSomething('2')" class="d-flex justify-content-between align-items-center"> <b-icon icon="pencil" scale="2" variant="info"></b-icon> Rename</b-list-group-item>
  <b-list-group-item  href="#" @click="doSomething('3')" class="d-flex justify-content-between align-items-center"> <b-icon icon="x-circle" scale="2" variant="danger"></b-icon> Delete</b-list-group-item>

</context-menu>


<!-- {{ localResources}} -->
</div>
</template>

<script>
export default {
  name: 'LocalBrowser',
  components :  {
    'contextMenu' : () => import('vue-context-menu'),
    'Toolbar' :  () => import ( '@/components/storage/Toolbar' ),
  },
  methods:{
    doSomething(e){
      console.log(e)
    }
  },
  computed:{
    localResources:{
      get () { return this.$store.state.localResources},
      set (/*value*/) { /*this.updateTodo(value)*/ }

    }
  }
}
</script>

<style>

</style>
