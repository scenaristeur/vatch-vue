<template>
  <div>

    <div v-if="pod != null">

      <b-button-toolbar aria-label="Toolbar with button groups and input groups">
        <b-button-group size="sm" class="mr-1" style="width:100%">
          <b-button @click="newFile"><b-icon icon="file-earmark-richtext" aria-hidden="true"></b-icon></b-button>
          <b-button @click="newFolder"><b-icon icon="folder-fill" aria-hidden="true"></b-icon></b-button>
          <b-button @click="load(pod.storage)"><b-icon icon="arrow90deg-up" aria-hidden="true"></b-icon></b-button>
          <b-button @click="load(parent(currentRemoteUrl))"><b-icon icon="arrow-up" aria-hidden="true"></b-icon></b-button>
          <b-form-input v-model="currentRemoteUrl" class="text-right" ></b-form-input>
          <b-button v-b-modal.bv-modal-profile><b-icon icon="person-circle" aria-hidden="true"></b-icon></b-button>

        </b-button-group>
      </b-button-toolbar>

      <b-list-group >
        <Resource v-for="res of remoteResources" :key="res"  :resource="res"  />
      </b-list-group>

      <b-modal id="bv-modal-profile" size="lg">
        <Login />
        Name: {{ pod.name }}<br>
        WebId : <a :href="pod.webId" target="_blank">{{ pod.webId}}</a>  <a href="https://podbrowser.inrupt.com/" target="_blank">Pod Browser</a><br>

        {{pod.friends}}
      </b-modal>
    </div>
    <Login v-else />
  </div>
</template>
<script>

export default {
  name: 'PodStorage',
  components :  {
    'Resource' :  () => import ( '@/components/storage/Resource' ),
    'Login': () => import('@/components/solid/Login')
  },
  methods:{
    async load(url){
      this.$store.dispatch('solid/setCurrentThingUrl', url)
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
        this.$store.dispatch('solid/createFile', {dest: dest, filename: saisie})
      }


    },
    newFolder(){
      var saisie = prompt("Foldername :", Date.now())
      console.log(saisie);
      if(saisie !== null && saisie.length > 0){
        let dest = this.currentRemoteUrl.endsWith('/') ? this.currentRemoteUrl : this.parent(this.currentRemoteUrl)
        this.$store.dispatch('solid/createFolder', {dest: dest, foldername: saisie})
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
