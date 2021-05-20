<template>
  <b-list-group-item href="#" @click="loadThing(item)" class="d-flex">
    <div class="mr-3">
      <!--  why mr-3 does not work ? -->
    <b-icon v-if="type=='Container'" icon="folder-fill" variant="warning"></b-icon>
    <b-icon v-else icon="file-earmark-richtext" variant="info"></b-icon>
    </div>
  <span>  {{item.internal_url}}</span>
    <!-- <small>  {{item}}</small> -->

  </b-list-group-item>
</template>

<script>
import { /*getSolidDataset, getThingAll, getStringNoLocale,*/ getUrlAll /*saveSolidDatasetAt*/ } from "@inrupt/solid-client";
import { RDF /*, VCARD */} from "@inrupt/vocab-common-rdf";

export default {
  name: 'StorageItem',
  props: ['item'],
  created(){
    this.init()
  },
  data(){
    return {
      type: ""
    }
  },
  methods:{
    async init(){
      // const things = await getThingAll(
      //   this.item,
      //   this.item.internal_url
      // );
      //  console.log("thingos", things)

      let types = getUrlAll(this.item, RDF.type);
      //console.log("types", types)
      this.type = types.includes("http://www.w3.org/ns/ldp#BasicContainer") ? "Container" : "Resource"

    },
    async loadThing(t){
      console.log(t)
      // this.currentThing = t.internal_url
      // await this.load()
      this.$store.dispatch('solid/setCurrentThingUrl', t.internal_url)
    },
  },
  watch:{
    async item(){

    }
  }
}
</script>

<style>

</style>
