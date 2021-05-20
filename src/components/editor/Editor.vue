<template>

  <b-modal id="bv-modal-editor" @ok="save" @cancel="cancel" size="lg">
    <template #modal-title>
      Editor   ... <a href="https://scenaristeur.github.io/ipgs/about" target="_blank">WAnt to CReate BIg MindMaps ? TRy Ipgs</a>
    </template>
    <b-img v-if="src.length > 0" :src="src" width="425px"/>
      <b-textarea v-else v-model="content" rows="20" cols="50">
      </b-textarea>

      <b-input v-model="path" autocomplete="off" />

    </b-modal>
  </template>

  <script>
  export default {
    name: 'Editor',
    data(){
      return {
        path: "",
        content: "",
        src: ""
      }
    },
    methods: {
      save(){
        this.$bvModal.hide('bv-modal-exditor')
        this.$socket.emit('write file', {path: this.path, content: this.content});
        this.src = ""
        this.path = ""
        this.content = ""
      },
      cancel(){
        this.src = ""
        this.path = ""
        this.content = ""
      },
      processFile(msg){
        this.src = ""
        this.path = ""
        this.content = ""
        if(msg.error){
          alert("Error: ",msg.error)
          return
        }
        if (msg.type == undefined){
          msg.ext = msg.path.split('.').pop()
        }
        this.$bvModal.show('bv-modal-editor')
        this.path = msg.path
        this.content = msg.content
        if(msg.type != undefined && msg.type.mime != undefined && msg.type.mime.split('/')[0] == 'image'){
          let src= 'data:'+msg.type.mime+';base64,' + msg.content;
          this.src = src
        }else{
          console.log(msg)
        }
      }
    },
    watch:{
      file(){
      //  console.log(this.file)
        this.processFile(this.file)
      }
    },
    computed:{
      file:{
        get () { return this.$store.state.file},
        set (/*value*/) { /*this.updateTodo(value)*/ }
      },
    }
  }
  </script>
