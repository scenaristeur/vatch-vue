<template>
  <b-list-group-item href="#" @click="loadThing(item)" class="d-flex" @contextmenu.prevent="openContext">
    <div class="mr-3">
      <!--  why mr-3 does not work ? -->
    <b-icon v-if="type=='Container'" icon="folder-fill" variant="warning"></b-icon>
    <b-icon v-else icon="file-earmark-richtext" variant="info"></b-icon>
    </div>
  <span>  {{item.internal_url}}</span>
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
import { /*getSolidDataset, getThingAll, getStringNoLocale,*/ getUrlAll /*saveSolidDatasetAt*/ } from "@inrupt/solid-client";
import { RDF /*, VCARD */} from "@inrupt/vocab-common-rdf";

export default {
  name: 'StorageItem',
  props: ['item'],
  components :  {
    'contextMenu' : () => import('vue-context-menu'),
  },
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
    openContext(){

      this.$refs.ctxMenu.open()
    },
    doSomething(e){
      let answer = false
      switch (e) {
        case 'delete':
        console.log("delete", this.item.internal_url)
        answer = confirm("Are you sure you want to delete "+this.item.internal_url);
        if (answer == true)
        {
          this.$store.dispatch('solid/deleteOnPod', this.item.internal_url)
        }


        break;
        default:
        console.log(e)
      }

    }
  },
  watch:{
    async item(){

    }
  }
}
</script>

<style>

</style>
