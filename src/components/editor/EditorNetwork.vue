<template>
  <div>
    <div id="editor-network" class="network">N/A</div>
    <b-button @click="clusterByGroup">Cluster By group</b-button>

  </div>
</template>

<script>
import { DataSet } from "vis-data";
import { Network } from "vis-network";
import "vis-network/styles/vis-network.css";

export default {
  name: 'EditorNetwork',
  props: ['net'],
  mounted(){
console.log("net",this.net)
    // create an array with nodes
    // const nodes = new DataSet(net.nodes);
    //
    // // create an array with edges
    // const edges = new DataSet(net.edges);

    // create a network
    const container = document.getElementById("editor-network");
    this.data = {
      nodes: new DataSet(this.net.nodes),
      edges: new DataSet(this.net.edges)
    };

    const options = {
      interaction: {
        navigationButtons: true,
        //  keyboard: true,
      },
      edges : {arrows: 'to'}};
      this.network = new Network(container, this.data, options);
console.log(this.data)
      this.network.on('selectNode', evt => this.$nodeSelected(this, evt))

      // this.localResources = this.$store.state.vatch.localResources
      // console.log(this.localResources)

    },
    methods:{
      clusterByGroup(){
        console.log("clu")
        this.$clusterByGroup(this.network)
      },

    }
}
</script>

<style>
#editor-network {
  width: 100%;
  height: 400px;
  border: 1px solid lightgray;
}
</style>
