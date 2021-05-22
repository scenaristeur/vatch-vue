<template>
  <div>

    <b-form-select v-model="vocab" :options="vocab_select"></b-form-select>
    <b-form-select v-model="predicate" :options="predicate_select"></b-form-select>

    <b-button size="sm" variant="outline-secondary"  :href="tag.object.concepturi" target="_blank">{{tag.object.match.text}}
    </b-button>
    <br>
    <small><i>({{tag.object.label}} / {{tag.object.description }})</i></small>
    <!-- {{ tag.object}} -->
    <!-- <hr> -->
    <!-- for {{ tag }} -->




  </div>
</template>

<script>
export default {
  name:'VocabSelector',
  props: ['tag'],
  created(){

    this.vocab_select = Object.keys(this.$store.state.solid.vocabs).map(k => {return {value: this.$store.state.solid.vocabs[k], text: k}  })
    console.log("SELECT VOCABS", this.vocab_select)
    this.vocab = this.$store.state.solid.vocabs.FOAF
    this.predicate_select = Object.keys(this.$store.state.solid.vocabs.FOAF).map(k => {return {value: this.$store.state.solid.vocabs.FOAF[k], text: k}  })
    this.predicate = this.vocab.topic_interest
  },
  data(){
    return {
      vocab_select: [],
      predicate_select: [],
      vocab: null,
      predicate: null
    }
  },

  watch:{
    predicate(){
      console.log(this.predicate)
      this.tag.predicate = this.predicate
      console.log(this.tag)
      // this.$emit('selected', { predicate: this.predicate, object: this.thing})
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
      this.predicate_select = this.predicate_select.filter(x => x.text.toLowerCase() == x.text)
    },
  },
  computed:{
    vocabs:{
      get () { return this.$store.state.solid.vocabs},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
