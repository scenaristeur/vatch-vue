<template>
  <div>
    <h3>Local Browser</h3>
    <b-list-group v-if="localResources.length > 0">
      <b-list-group-item href="#" v-for="(lr, i) in localResources" :key="i">
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
  <!-- {{ localResources}} -->
</div>
</template>

<script>
export default {
  name: 'LocalBrowser',
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
