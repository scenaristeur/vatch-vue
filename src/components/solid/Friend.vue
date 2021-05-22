<template lang="html">
  <div>
    <b-list-group-item  v-if="f.status =='loading'">
      Loading {{ f.webId }} ...
    </b-list-group-item >
    <b-list-group-item v-else class="d-flex align-items-center " button>



      <b-avatar variant="info" :src="f.photo" class="mr-3"></b-avatar>
      <span class="mr-auto" v-if="f.name">{{f.name}}</span>
      <!-- <span class="mr-auto" v-else>{{ f.webId }}</span> -->
      <!-- m<b-badge>M</b-badge>-->
      <b-badge variant="success">{{f.publicTags.length}} tags</b-badge>
      <span v-if="f.friends && f.friends.length > 0" class="ml-auto">{{f.friends.length}} friends </span>
      <span v-if="f.publicTags" class="ml-auto"> &nbsp;&nbsp; {{f.publicTags.length}} tags</span>
      <!-- <span v-if="f.name">{{f.name}}</span><br>
      <span v-if="f.storage">  {{f.storage}}</span><br>
      <span v-if="f.friends && f.friends.length > 0">{{f.friends.length}} friends<br></span>
      <span v-if="f.publicTags">{{f.publicTags.length}} tags</span><br>
      P  <span v-if="f.photo">{{f.photo}}</span><br> -->

    </b-list-group-item>

  </div>
</template>

<script>
export default {
  name: 'Friend',
  props:['friend'],
  data(){
    return {
      f: {webId: this.friend.webId, status : 'loading'}
    }
  },
  // created(){
  //   this.f = this.friend
  // },
  async created() {
    this.f = await this.$getPodInfos(this.friend)
  }
}
</script>

<style lang="css">
</style>
