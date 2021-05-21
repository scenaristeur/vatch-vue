<template>
  <div>
    <b-modal id="bv-modal-things" @ok="save" size="lg">
      <template #modal-title>
        Things
      </template>
      <div v-for="t in things" :key="t.internal_url" :title="thingAsMarkdown(t)">
        {{asUrl(t)}}
        <br>
        <ul>
          <li v-for="q in t._quads" :key="q">

            <!-- {{q[1].subject.value}} ->  -->
            {{q[1].predicate.value}}  -> {{q[1].object.value}}
          </li>
        </ul>

      </div>
      <hr>
      {{ things }}
      <!-- <b-img v-if="src.length > 0" :src="src" width="425px"/>
      <b-textarea v-else v-model="content" rows="20" cols="50">
    </b-textarea> -->

    <!-- <b-input v-model="path" autocomplete="off" /> -->

  </b-modal>
</div>
</template>

<script>
import { thingAsMarkdown, asUrl/* getStringNoLocale, getUrlAll*/ /*saveSolidDatasetAt*/ } from "@inrupt/solid-client";


export default {
  name: 'Things',
  methods:{
    thingAsMarkdown(t){
      return thingAsMarkdown(t)
    },
    asUrl(t){
      return asUrl(t)
    },
    save(){
      console.log("this.things")
    }
  },
  watch:{
    things(){
      console.log(this.things)
      this.things.forEach(t => {
        console.log(t)
        console.log("entities", t._entities)
        Object.entries(t._entities).forEach((e) => {
          console.log("e",e)
        });

        console.log("graphs", t._graphs)
        console.log("quads", t._quads)
        Object.entries(t._graphs).forEach((g) => {
          console.log("g",g)
        });
        t._quads.forEach((values,keys)=>{
          console.log(values,keys+"<br>")
        })
      });

      this.$bvModal.show('bv-modal-things')
    }
  },
  computed:{
    things:{
      get () { return this.$store.state.solid.things},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  }
}
</script>

<style>

</style>
