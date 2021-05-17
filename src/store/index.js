import Vue from 'vue'
import Vuex from 'vuex'
import { /*handleIncomingRedirect, login,*/ fetch,/* getDefaultSession*/ } from '@inrupt/solid-client-authn-browser'

import { getSolidDataset, getThingAll,/* getStringNoLocale, getUrlAll*/ /*saveSolidDatasetAt*/ } from "@inrupt/solid-client";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storage : null,
    things: []

  },
  mutations: {
    setStorage(state,s){
      state.storage = s
    },
    setThings(state, things){
      console.log("setThings", things)
      state.things = things
    }
  },
  actions: {
     setStorage(context,s){
      context.commit('setStorage',s)
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
