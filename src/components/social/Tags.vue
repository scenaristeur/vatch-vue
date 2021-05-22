<template lang="html">
  <div class="component-wrapper">

    <!-- {{tags}} -->

    <div v-for="(t,i) in tags" :key="i" >
      <!-- {{asUrl(t)}} <TagButton :path="t.internal_url"/> -->
      {{t}}<br>---
    </div>
    <hr>

    <!-- <div v-for="(t,i) in tags" :key="i" >
    {{asUrl(t)}} <TagButton :path="t.internal_url"/>
    {{t}}
    <br>
    <ul>
    <li v-for="(q,j) in t._quads" :key="j">

    {{q[1].subject.value}} ->  
    {{q[1].predicate.value}}  -> {{q[1].object.value}}
  </li>
</ul>

</div> -->
</div>
</template>

<script>
export default {
  name: "Tags",
  props: ['tags'],
  mounted() {
    console.log('New component mounted.')
  }
}
</script>

<style lang="css">
</style>
