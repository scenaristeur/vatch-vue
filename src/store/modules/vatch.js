const state = () => ({
  //pod
//  podStorage : null,

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

})

const actions = {

}

const mutations = {
  setInput(state, i){
    state.input = i
  },
  setPodStorage(state,s){
    state.podStorage = s
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

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
