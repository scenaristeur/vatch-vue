import Vue from 'vue'
import { getSolidDataset, getThingAll,
  getFile,
  isRawData,
  getContentType,
  saveFileInContainer,
  getContainedResourceUrlAll,
  createContainerAt,
  getSourceUrl, deleteFile, deleteContainer,
  //  addStringNoLocale,
  getThing,
  setThing,
  saveSolidDatasetAt,
  createSolidDataset,
  createThing,
  addUrl,
  overwriteFile/* getStringNoLocale, getUrlAll*/ /*saveSolidDatasetAt*/ } from "@inrupt/solid-client";
  import { handleIncomingRedirect, login, fetch, getDefaultSession, onSessionRestore,/* getSessionIdFromStorageAll,*/ /*getSessionFromStorage */ } from '@inrupt/solid-client-authn-browser'

  import * as common from "@inrupt/vocab-common-rdf";
  import * as inrupt from "@inrupt/vocab-inrupt-common"
  import * as solid from "@inrupt/vocab-solid-common"

  const state = () => ({
    session: null,
    pod: null,
    currentRemoteUrl: "",
    remoteResources: [],
    things: [],
    vocabs: {
      ...common,
      ...inrupt,
      ...solid
    },
    tags: {}
  })

  const actions = {
    async checkSessions({commit, dispatch}, params){
      try{
        await handleIncomingRedirect({restorePreviousSession : params.restore}).then((info) => {
          console.log(info)
        })
        let session = getDefaultSession()
        onSessionRestore((url) => {
          console.log("restore",url)
        });
        commit('setSession',session)
        dispatch('getPodInfos', session)
      } catch(e){
        alert(e)
      }
    },

    async login(context, issuer) {

      try{
        await login({
          oidcIssuer: issuer,
          redirectUrl: window.location.href,
          clientName: "Vatch",
        });
      } catch(e){
        alert(e)
      }
    },

    async logout(context, params){
      try{
        let session = getDefaultSession()
        console.log(params)
        await session.logout()
        context.commit('setSession',session)
        context.commit('setPod', {})
      } catch(e){
        alert(e)
      }
    },

    async getPodInfos(context, session){
      try{
        let pod = {}
        pod.logged = session.info.isLoggedIn
        if (pod.logged) {
          pod.webId = session.info.webId
          pod = await Vue.prototype.$getPodInfos(pod)
          context.commit('setPod', pod)
          if (pod.storage != null){
            context.dispatch('setCurrentThingUrl', pod.storage)
            context.dispatch('getTags', pod.storage)
          }
        }else{
          context.commit('setPod', null)
          context.commit('setThings', [])
        }
      } catch(e){
        alert(e)
      }
    },

    async getTags(context, podStorage){
      let publicTagFile = podStorage+'public/tags.ttl'
      //let privateTagFile = podStorage+'private/tags.ttl'

      let tags = await Vue.prototype.$getTags(publicTagFile)
      console.log("tags",tags)


    },

    async addTags(context, params){
      //console.log(params)

      let tagDataset
      try{
        tagDataset = await getSolidDataset(params.tagFile, {fetch: fetch});
      }catch(e){
        //  console.log(e)
      }

      //  console.log(tagDataset)
      tagDataset== undefined || tagDataset== null ? tagDataset = createSolidDataset() :""

      let thing, thingInDs;
      //thing = addUrl(thing, RDF.type, LDP.Resource);
      params.tags.forEach((t) => {
        console.log("add",t.subject, t.predicate.value, t.object.concepturi )
        //  console.log(thing == undefined || thing ==null, thing)
        //thing == undefined || thing ==null ?  thing = getThing(tagDataset, params.tagFile+"#"+t.subject) : ""
        thing == undefined || thing ==null ?  thing = getThing(tagDataset, t.subject) : ""
        //  console.log(thing)
        //  thing == null ? thing = createThing({name: t.subject}) : ""
        thing == null ? thing = createThing({url: t.subject}) : ""
        //  console.log(thing)
        thing = addUrl(thing, t.predicate.value, t.object.concepturi);

      });
      thingInDs = setThing(tagDataset, thing);


      let savedThing = await saveSolidDatasetAt(params.tagFile, thingInDs, { fetch: fetch } );
      console.log("File saved",savedThing);
    },

    async uploadLocalToPod(context,params){
      try{
        console.log(params)

        if(params.dest == undefined){
          alert ("Please select a destination")
          return
        }


        let type = params.type && params.type.mime || "plain/text"
        let distIsDirectory = params.dest.endsWith('/')
        let srcIsDirectory = params.event == "addDir"

        if (srcIsDirectory){
          console.info("todo src is directory")
        }else{

          if(distIsDirectory){
            params.parts == undefined ? params.parts = params.path.split(context.rootState.vatch.pathsep) : ""
            let slug = encodeURIComponent(params.parts.pop())
            const savedFile = await saveFileInContainer(
              params.dest,
              new Blob([params.content], { type: type }),
              { slug: slug, fetch: fetch }
            );

            console.log(`File saved at ${getSourceUrl(savedFile)}`);
            context.dispatch('setCurrentThingUrl', params.dest)
          }else{

            let answer = confirm("Are you sure you want to replace "+params.dest);
            if (answer == true)
            {
              const savedFile = await overwriteFile(
                params.dest,
                new Blob([params.content], { type: type }),
                { fetch: fetch }
                // Or in Node:
                // Buffer.from("This is a plain piece of text", "utf8"), { type: "plain/text" })
              );
              console.log("File saved!", savedFile);
            }


          }

        }
      } catch(e){
        alert(e)
      }

    },

    async createFile(context, params){
      try{
        let type = params.type && params.type.mime || "plain/text"
        let slug = encodeURIComponent(params.filename)
        const savedFile = await saveFileInContainer(
          params.dest,
          new Blob([params.content || ""], { type: type }),
          { slug: slug, fetch: fetch }
        );
        console.log(`File saved at ${getSourceUrl(savedFile)}`);
        context.dispatch('setCurrentThingUrl', params.dest)
      } catch(e){
        alert(e)
      }
    },

    async createFolder(context, params){
      try{
        let url = params.dest+encodeURIComponent(params.foldername)
        const savedFolder = await createContainerAt(url, {fetch: fetch});
        console.log(`Folder saved at ${getSourceUrl(savedFolder)}`);
        context.dispatch('setCurrentThingUrl', params.dest)
      } catch(e){
        alert(e)
      }
    },

    async setCurrentThingUrl(context, url){
      try{
        const file = await getFile(url, {fetch: fetch});
        // file is a Blob (see https://developer.mozilla.org/docs/Web/API/Blob)
        console.log(
          `Fetched a ${getContentType(file)} file from ${getSourceUrl(file)}.`
        );
        console.log(`The file is ${isRawData(file) ? "not " : ""}a dataset.`);

        context.commit('setCurrentRemoteUrl',url)

        if(isRawData(file)){
          console.log("todo raw data", file)
          var reader = new FileReader();
          reader.addEventListener("loadend", function() {
            console.log(reader)
            //  console.log(reader.result)
            context.commit('vatch/setFile', {
              path: getSourceUrl(file),
              content : reader.result,
              type:{mime: getContentType(file)}
            }, { root: true })
            // reader.result contient le contenu du
            // blob sous la forme d'un tableau typé
          });
          reader.readAsText(file);
        }else{
          const myDataset = await getSolidDataset( url, {fetch: fetch});
          console.log(myDataset)

          let resources = await getContainedResourceUrlAll(myDataset,{fetch: fetch} )
          console.log("Resources", resources)
          if(resources.length > 0){
            context.commit('setRemoteResources',resources)
          }else{
            const things = await getThingAll(
              myDataset,
              url
            );
            context.commit('setThings',things)
          }
        }
      }
      catch(e){
        alert(e)
      }

    },
    async deleteOnPod(context, url){
      try{
        if(url.endsWith('/')){
          await deleteContainer(
            url, { fetch: fetch }
          );
        }
        else{
          await deleteFile(
            url, { fetch: fetch }
          );
        }
        console.log(" deleted !",url);
        let parent = url.slice(0, url.lastIndexOf('/'))+'/';
        console.log("parent",parent)
        context.dispatch('setCurrentThingUrl', parent)
      } catch(e){
        alert(e)
      }

    }
  }

  const mutations = {
    setPod(state,p){
      state.pod = p
    },
    setSession(state, s){
      state.session = s
    },
    setCurrentRemoteUrl(state, url){
      console.log(url)
      state.currentRemoteUrl = url
    },
    setRemoteResources(state, r){
      state.remoteResources = r
    },
    setThings(state, things){
      state.things = things
    },
  }

  export default {
    namespaced: true,
    state,
    actions,
    mutations
  }