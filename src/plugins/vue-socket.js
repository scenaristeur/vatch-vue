
//import "../js/socket.io.min.js"
//window.socket = io(':3000');
import { io } from "socket.io-client";

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    // vatch-vue hosted on github can access your local storage
    //let socket = Vue.prototype.$socket = io('http://localhost:3000');
    // share your localhost storage on your localnetwork
    console.log("window.location",window.location)
    window.location == "https://scenaristeur.github.io/vatch-vue/" ? console.info("connecting to your local filesystem through socket.io") : console.info("sharing your local filesystem to your local network through socket.io")
    let server = window.location == "https://scenaristeur.github.io/vatch-vue/" ? 'http://localhost:3000' : ':3000'

    let socket = Vue.prototype.$socket = io(server);

    socket.on('init', function(init) {
      console.log('init',init)
      store.commit("vatch/updatepathSep", init.pathsep)
    });

    socket.on('users', function(users) {
      console.log("users",users)
      store.commit("vatch/setUsers", users)
    });

    socket.on('watcher event', function(ressources) {

      //  ressources.map(r => r.parts = r.path.split())
      console.log("Watcher event",ressources)
      store.commit("vatch/updateLocalResources", ressources)
    });

    socket.on('walker', function(ressources) {
      console.log("Walker",ressources)
      store.commit("vatch/updateLocalResources", ressources)
    });

    socket.on('cat file', function(file) {
      if(file.callback != undefined){
        store.dispatch(file.callback, file)
      }else{
        console.log("TODO PROCESSFILE cat file", file)
        store.commit("vatch/setFile", file)
      }

    });

    socket.on('chat message', function(msg) {
      console.log('chat message',msg)
      store.commit("vatch/addChatMessage", msg)
    });

    socket.on('connect', () => {
      store.commit("vatch/setUser", socket.id)
    });
    socket.on('disconnect', () => {
      store.commit("vatch/setUser", null)
    });

  },
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
