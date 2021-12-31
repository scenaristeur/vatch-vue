<template>
  <div  class="mb-4">

    <div v-if="pod != null">
      <!-- <Websocket /> -->
      <b-button-toolbar aria-label="Toolbar with button groups and input groups">
        <b-button-group size="sm" class="mr-1" style="width:100%">
          <b-button @click="load(pod.storage)"><b-icon icon="arrow90deg-up" aria-hidden="true"></b-icon></b-button>
          <b-button @click="load(parent(currentRemoteUrl))"><b-icon icon="arrow-up" aria-hidden="true"></b-icon></b-button>
          <b-button @click="newFile"><b-icon icon="file-earmark-richtext" aria-hidden="true"></b-icon></b-button>
          <b-button @click="newFolder"><b-icon icon="folder-fill" aria-hidden="true"></b-icon></b-button>
          <b-button v-b-modal.bv-modal-profile><b-icon icon="person-circle" aria-hidden="true"></b-icon></b-button>
        </b-button-group>
        <b-button-group>


        </b-button-group>
      </b-button-toolbar>
      <b-form-input v-model="currentRemoteUrl" class="text-right" ></b-form-input>


      <!-- <Tags :tags="pod.publicTags" /> -->




      <div style="height: 400px;overflow-y: scroll;">
        <b-list-group >
          <Resource v-for="res of remoteResources" :key="res"  :resource="res"  />
        </b-list-group>
      </div>
      <Profile />
    </div>
    <Login v-else />
  </div>
</template>
<script>

export default {
  name: 'PodStorage',
  components :  {
    'Resource' :  () => import ( '@/components/storage/Resource' ),
    'Login': () => import('@/components/solid/Login'),
    'Profile': () => import('@/components/solid/Profile'),
  //  'Websocket': () => import('@/components/solid/Websocket'),
    // 'Tags': () => import('@/components/social/Tags')
  },
  methods:{
    async load(url){
      this.$setCurrentThingUrl(url)
    },
    parent(url){
      url = url.endsWith('/') ? url.slice(0, -1) : url;
      return url.substring( 0, url.lastIndexOf( "/" ) + 1)
    },
    newFile(){
      var saisie = prompt("Filename :", Date.now())
      console.log(saisie);
      if(saisie !== null && saisie.length > 0){
        let dest = this.currentRemoteUrl.endsWith('/') ? this.currentRemoteUrl : this.parent(this.currentRemoteUrl)
        this.$createFile({dest: dest, filename: saisie})
      }


    },
    newFolder(){
      var saisie = prompt("Foldername :", Date.now())
      console.log(saisie);
      if(saisie !== null && saisie.length > 0){
        let dest = this.currentRemoteUrl.endsWith('/') ? this.currentRemoteUrl : this.parent(this.currentRemoteUrl)
        this.$createFolder({dest: dest, foldername: saisie})
      }
    }
  },
  computed:{
    pod:{
      get () { return this.$store.state.solid.pod},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    remoteResources:{
      get () { return this.$store.state.solid.remoteResources},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    currentRemoteUrl:{
      get () { return this.$store.state.solid.currentRemoteUrl},
      set (/*value*/) { /*this.updateTodo(value)*/ }
    }
  }
}
</script>
