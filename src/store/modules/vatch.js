const state = () => ({
  //pod
//  podStorage : null,
//  things: [],
  //Local
  pathsep: '/', //  ... / for linux, \\ for Windows
  users: [],
  localResources : [],
//  podResources: {},
  netWork: {},
  user: null,
  chatMessages : [],
  file: {},
//  webId: null,
  storage: null,
  input: '',
//  currentRemoteUrl: ""
})

const actions = {
  setPodStorage(context,s){
    context.commit('setPodStorage',s)
    if (s != null){
      context.dispatch('setCurrentThingUrl', s)
    }

  },
}

const mutations = {
  setInput(state, i){
    state.input = i
  },
  setPodStorage(state,s){
    state.podStorage = s
  },
  setThings(state, things){
    console.log("setThings", things)
    state.things = things
  },
  setUser(state, u){
    console.log(u)
    state.user = u
  },
  setUsers(state, u){
    state.users = u
  },
  updatepathSep(state, p){
    state.pathsep = p
  },
  updateLocalResources(state, r){
    console.log(r)
    state.localResources = r
  },
  addChatMessage(state, m){
    state.chatMessages.push(m)
  },
  setFile(state, f){
    state.file = f
  },
  setCurrentRemoteUrl(state, url){
    state.currentRemoteUrl = url
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
