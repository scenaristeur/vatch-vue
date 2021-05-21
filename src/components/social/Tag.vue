<template>

  <b-modal id="bv-modal-tag" @ok="save" size="lg">
    <template #modal-title>
      Wikidata tagger
      <b-spinner label="Loading..." v-if="loading==true"></b-spinner>

    </template>
    tags for : <b>{{path}}</b>

    <p class="my-4">


      <b-form-group
      label="Search on wikidata"
      label-for="wikidata_search"
      description="ex: `solid project`"
      class="mb-0"
      >

      <vue-bootstrap-typeahead
      id="wikidata_search"
      :data="items"
      v-model="itemSearch"
      size="lg"
      :serializer="s => s.match.text"
      placeholder="type two letters"
      @hit="selectedItem = $event">

      <template slot="suggestion" slot-scope="{ data }">

        <b class="md-2">{{ data.match.text}}&nbsp;</b>
        <small><i>{{data.description}}</i></small>

      </template>
    </vue-bootstrap-typeahead>

  </b-form-group>

  <b-list-group>
    <b-list-group-item v-for="t in tags" :key="t.id" button>
      <VocabSelector :thing='t' @selected="update" />


      {{t.label}} ({{t.description}} / {{t.match}})

    </b-list-group-item>

  </b-list-group>



</p>
if you don't find, try the <a href="https://www.wikidata.org/w/index.php?title=Special%3ASearch&go=Go&ns0=1&ns120=1" target="_blank">manual search</a>
<b-form-group label="Privacy:" v-slot="{ ariaDescribedby }">
  'Public Tag File' allow other people to find this resource with your help ! but you can keep it private 😉
  <b-form-radio v-model="privacy" :aria-describedby="ariaDescribedby" name="some-radios" value="public"> Public Tag File</b-form-radio>
  <b-form-radio v-model="privacy" :aria-describedby="ariaDescribedby" name="some-radios" value="private"> Private Tag File</b-form-radio>
</b-form-group>

</b-modal>

</template>

<script>
import _ from 'underscore'
const API_URL = 'https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json'

export default {
  name: 'Tag',

  components :  {
    'VueBootstrapTypeahead' :  () => import ( 'vue-bootstrap-typeahead' ),
    'VocabSelector': () => import ('@/components/solid/VocabSelector')
  },
  created(){
    this.language = navigator.language.split("-")[0] || 'en'
    this.tagFile = this.pod.storage+this.privacy+"/tags.ttl"
  },
  data(){
    return {
      path: null,
      items: [],
      itemSearch: '',
      selectedItem: null,
      loading: false,
      conceptUri: "",
      tags: [],
      privacy: 'public'
    }
  },
  methods: {
    update(e){
      console.log(this.privacy, e)
      let params = {
        file : this.tagFile,
        subject: this.path,
        predicate: e.predicate.value,
        object:  e.object.url
      }
      console.log(params)



    },
    save(){
      console.log(this.tagFile, this.privacy, this.path, this.tags)


    },
    async getItems(query) {
      //  this.conceptUri = ""
      if(query.length>0){
        this.loading = true
        let search_url = API_URL+"&language="+this.language+"&search="+query
        console.log(search_url)
        try{
          const res = await fetch(search_url)
          const suggestions = await res.json()
          console.log(suggestions)
          this.items = suggestions.search
          console.log(this.items)
        }catch(e){
          alert(e)
        }
        this.loading = false
      }
    },
    change(e) {
      console.log(e)
    },
    input(e) {
      console.log(e)
      //  let val = e.target.value
      // console.log(val)
      if (e.length > 1){
        let search_url = `http://www.wikidata.org/w/api.php
        &action=wbsearchentities
        &format=json
        &language=${this.language}
        &type=item
        &continue=0
        &search=${e}`
        console.log(search_url)
      }
    }
  },
  watch: {
    itemSearch: _.debounce(function(item) { this.getItems(item) }, 500),
    selectedItem(){
      console.log(this.selectedItem)
      this.conceptUri = this.selectedItem.concepturi
      console.log("conceptUri",this.conceptUri)
      console.log("selected",this.selectedItem)
      this.tags.push(this.selectedItem)
      this.itemSearch = ""
    },

    resourceToTag(){
      if (this.resourceToTag != null){
        this.$bvModal.show("bv-modal-tag")
        this.path = this.resourceToTag
        this.tags = []
      }
    },
    privacy(){
      this.tagFile = this.pod.storage+this.privacy+"/tags.ttl"
    }
  },
  computed:{
    resourceToTag:{
      get () { return this.$store.state.vatch.resourceToTag},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    pod:{
      get () { return this.$store.state.solid.pod},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }

}
</script>

<style>

</style>
