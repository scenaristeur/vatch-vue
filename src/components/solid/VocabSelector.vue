<template>
  <div>
    for {{ thing.label }}
    <b-form-select v-model="vocab" :options="vocab_select"></b-form-select>
    <b-form-select v-model="predicate" :options="predicate_select"></b-form-select>

  </div>
</template>

<script>
export default {
  name:'VocabSelector',
  props: ['thing'],
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
       this.$emit('selected', { predicate: this.predicate, object: this.thing})
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
