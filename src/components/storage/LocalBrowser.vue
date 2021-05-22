<template>
  <div class="mb-3">
    <h3>Local Browser</h3>


    <!-- <Toolbar environnement="local" /> -->
    <div style="max-height: 400px;overflow-y: scroll;">
      <b-list-group v-if="localResources.length > 0">
        <b-list-group-item href="#" v-for="(lr, i) in localResources" :key="i" @contextmenu.prevent="openContext(lr)" class="d-flex">
          <div class="mr-3">
            <!--  why mr-3 does not work ? -->
            <b-icon v-if="lr.event=='addDir'" icon="folder-fill" variant="warning"></b-icon>
            <b-icon v-else icon="file-earmark-richtext" variant="info"></b-icon>
          </div>
          {{lr.path}}
        </b-list-group-item>


      </b-list-group>
      <div v-else>
        please install <a href="https://github.com/scenaristeur/vatch" target="_blank">vatch server</a> on your local machine.
        <br>

        <code style="text-align:left" variant="success"><pre>
          git clone https://github.com/scenaristeur/vatch.git
          cd vatch
          // git submodule update --recursive --remote for later updates
          git submodule update --init --recursive
          npm install
          node .

        </pre>
      </code>
    </div>
  </div>
  <!-- <context-menu id="context-menu" ref="ctxMenu">
  <b-list-group>
  <b-list-group-item  href="#" @click="doSomething('1')">option 1 L</b-list-group-item>
  <b-list-group-item  href="#" @click="doSomething('2')">option 2</b-list-group-item>
  <b-list-group-item  href="#" @click="doSomething('3')">option 3</b-list-group-item>
</b-list-group>
</context-menu> -->


<context-menu id="context-menu-item" ref="ctxMenuItem">

  <b-list-group-item v-if="currentRemoteUrl.length > 0" href="#" @click="doSomething('upload')" class="d-flex justify-content-between align-items-center">
    <b-icon icon="cloud-upload" scale="2" variant="info"></b-icon>
    <a :title="currentRemoteUrl">Upload to POD</a>
  </b-list-group-item>

  <b-list-group-item  href="#" @click="doSomething('1')" class="d-flex justify-content-between align-items-center">
    <b-icon icon="pencil-square" scale="2" variant="info"></b-icon>
    Edit (todo)
  </b-list-group-item>
  <b-list-group-item  href="#" @click="doSomething('2')" class="d-flex justify-content-between align-items-center">
    <b-icon icon="pencil" scale="2" variant="info"></b-icon>
    Rename 'todo'
  </b-list-group-item>
  <b-list-group-item  href="#" @click="doSomething('3')" class="d-flex justify-content-between align-items-center">
    <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
    Delete #todo#
  </b-list-group-item>

</context-menu>


<!-- {{ localResources}} -->
</div>
</template>

<script>
export default {
  name: 'LocalBrowser',
  components :  {
    'contextMenu' : () => import('vue-context-menu'),
    // 'Toolbar' :  () => import ( '@/components/storage/Toolbar' ),
  },
  methods:{
    openContext(lr){
      console.log(lr)
      this.lr = lr
      this.$refs.ctxMenuItem.open()
    },
    doSomething(e){
      switch (e) {
        case 'upload':
        console.log("upload", this.lr.path, this.currentRemoteUrl)
        this.lr.dest= this.currentRemoteUrl
        this.lr.callback = 'solid/uploadLocalToPod'
        this.$socket.emit('read file', this.lr);
        break;
        default:
      }

    }
  },
  computed:{
    localResources:{
      get () { return this.$store.state.vatch.localResources},
      set (/*value*/) { /*this.updateTodo(value)*/ }

    },
    currentRemoteUrl:{
      get () { return this.$store.state.solid.currentRemoteUrl},
      set (/*value*/) { /*this.updateTodo(value)*/ }

    },
  }
}
</script>

<style>

</style>
