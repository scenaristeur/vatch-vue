import Vue from 'vue'
import Vuex from 'vuex'
import { /*handleIncomingRedirect, login,*/ fetch,/* getDefaultSession*/ } from '@inrupt/solid-client-authn-browser'

import { getSolidDataset, getThingAll,/* getStringNoLocale, getUrlAll*/ /*saveSolidDatasetAt*/ } from "@inrupt/solid-client";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //pod
    podStorage : null,
    things: [],
    //Local
    pathsep: '/', //  ... / for linux, \\ for Windows
    users: [],
    localResources : [],
    podResources: {},
    netWork: {},
    user: null,
    chatMessages : [],
    file: {},
    webId: null,
    storage: null

  },
  mutations: {
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
    }
  },
  actions: {
    setPodStorage(context,s){
      context.commit('setPodStorage',s)
      if (s != null){
        context.dispatch('setCurrentThingUrl', s)
      }

    },
    async setCurrentThingUrl(context, url){
      const myDataset = await getSolidDataset(
        url, {
          fetch: fetch
        });
        console.log(myDataset)
        const things = await getThingAll(
          myDataset,
          url
        );
        console.log("Things", things)
        //  this.things = things
        context.commit('setThings',things)
        // let documentLoaderType = 'xhr'
        // await jsonld.useDocumentLoader(documentLoaderType/*, options*/);
        // this.doc = await jsonld.documentLoader(this.storage, function(err) {
        //   if(err) {
        //     alert(err)
        //   }
        // })
        // this.doc.jsonld = JSON.parse(this.doc.document)
        //
        // console.log(this.doc)
        //  }

      }
    },
    modules: {
    }
  })
