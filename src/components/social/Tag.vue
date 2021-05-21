<template>

  <b-modal id="bv-modal-tag" @ok="save" size="lg">
    <template #modal-title>
      Wikidata tagger
      <b-spinner label="Loading..." v-if="loading==true"></b-spinner>

    </template>
    {{path}}

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

    <b-form-select v-model="vocab" :options="vocab_select"></b-form-select>
    <b-form-select v-model="predicate" :options="predicate_select"></b-form-select>


    {{t.label}} ({{t.description}} / {{t.match}})

  </b-list-group-item>

</b-list-group>



</p>
<a href="https://www.wikidata.org/w/index.php?title=Special%3ASearch&go=Go&ns0=1&ns120=1" target="_blank">Manual search</a>

</b-modal>

</template>

<script>
import _ from 'underscore'
const API_URL = 'https://www.wikidata.org/w/api.php?action=wbsearchentities&origin=*&format=json'

export default {
  name: 'Tag',

  components :  {
    'VueBootstrapTypeahead' :  () => import ( 'vue-bootstrap-typeahead' ),
  },
  created(){
    console.log(navigator.language)
    this.language = navigator.language.split("-")[0] || 'en'
    this.vocab_select = Object.keys(this.$store.state.solid.vocabs).map(k => {return {value: this.$store.state.solid.vocabs[k], text: k}  })
    console.log("SELECT VOCABS", this.vocab_select)
    this.vocab = this.$store.state.solid.vocabs.FOAF
    this.predicate_select = Object.keys(this.$store.state.solid.vocabs.FOAF).map(k => {return {value: this.$store.state.solid.vocabs.FOAF[k], text: k}  })
    this.predicate = this.vocab.topic_interest
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
      vocab_select: [],
      predicate_select: [],
      vocab: null,
      predicate: null
    }
  },
  methods: {
    save(){
      console.log(this.path, this.tags)

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
    vocabs(){
      console.log(this.vocabs)
      console.log(Object.entries(this.vocabs))
      this.vocab_select =  Object.keys(this.vocabs).map((k,v) => {return {value: v, text: k}  })
      console.log("SELECT VOCABS", this.vocab_select)
    },
    vocab(){
      console.log(this.vocab)
      let voc = this.vocab.PREFIX.toUpperCase()
      this.predicate_select = Object.keys(this.$store.state.solid.vocabs[voc]).map(k => {return {value: this.$store.state.solid.vocabs[voc][k], text: k}  })
      //  this.predicate = this.predicate_select[0]
    },
    resourceToTag(){
      if (this.resourceToTag != null){
        this.$bvModal.show("bv-modal-tag")
        this.path = this.resourceToTag
      }
    }
  },
  computed:{
    vocabs:{
      get () { return this.$store.state.solid.vocabs},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    resourceToTag:{
      get () { return this.$store.state.vatch.resourceToTag},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }

}
</script>

<style>

</style>
