import {
  getSolidDataset,
  getThingAll,
  // getFile,
  // isRawData,
  // getContentType,
  // saveFileInContainer,
  // getContainedResourceUrlAll,
  // createContainerAt,
  // getSourceUrl,
  //  deleteFile,
  //   deleteContainer,
  //  addStringNoLocale,
  // setThing,
  // saveSolidDatasetAt,
  // createSolidDataset,
  // createThing,
  // addUrl,
  // overwriteFile,
  getStringNoLocale,
  getThing,
  getUrlAll,
  getUrl
} from "@inrupt/solid-client";
import { FOAF, /*RDF, LDP,*/ VCARD } from "@inrupt/vocab-common-rdf";
import { WS, /*, VCARD */} from "@inrupt/vocab-solid-common";
// import {
//   // handleIncomingRedirect,
//   //  login,
//   //fetch,
//   // getDefaultSession,
//   //  onSessionRestore,
//   /* getSessionIdFromStorageAll,*/
//   /*getSessionFromStorage */
// } from '@inrupt/solid-client-authn-browser'
import * as sc from '@inrupt/solid-client-authn-browser'
import * as jsonld from 'jsonld';


const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$getPodInfos = async function(pod){
      try{
        const dataset = await getSolidDataset( pod.webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, pod.webId );
        pod.name = await getStringNoLocale(profile, FOAF.name);
        pod.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        pod.storage = await getUrl(profile, WS.storage);
        pod.photo = await getUrl(profile, VCARD.hasPhoto);
        pod.publicTags = await this.$getTags(pod.storage+'public/tags.ttl')
        store.commit("vatch/addToNetwork", pod.publicTags)
        console.log("getpodinfos",pod)
      }catch(e)
      {
        console.log("erreur",e, pod)
      }
      return await pod
    }

    Vue.prototype.$getTags = async function (tagFile){
      try{

        let tagsJ = await parseTagsJsonld(tagFile)
        console.log("tags JSONLD",tagsJ)

        let tagsR = await parseTagsRdf(tagFile)
        console.log("tags RDF",tagsR)

        const tagDataset = await getSolidDataset( tagFile, { fetch: sc.fetch });
        let things =  await getThingAll(tagDataset, tagFile);
        console.log(things)

        return tagsR
      }catch(e){
        return []
      }
    }

    async function parseTagsRdf(url){
      let graph = {nodes: [], edges: []}
      let dataset = await getSolidDataset(url, { fetch: sc.fetch });
      //    console.log(dataset)
      await dataset._quads.forEach(async function (q)  {
        let [s,p,o] = [
          {id:q.subject.id, label: await lastPart(q.subject.id)},
          q.predicate.id,
          {id:q.object.id, label: await lastPart(q.object.id)}
        ]
        //  console.log(s,p,o)
        var indexS = graph.nodes.findIndex(x => x.id==s.id);
        indexS === -1 ? graph.nodes.push(s) : "" //console.log("object already exists")
        var indexO = graph.nodes.findIndex(x => x.id==o.id);
        indexO === -1 ? graph.nodes.push(o) : "" //console.log("object already exists")
        let edge = {from: s.id, to: o.id, label: await lastPart(p)}
        var indexP = graph.edges.findIndex(x => x.from==edge.from && x.to == edge.to && x.label == edge.label);
        indexP === -1 ? graph.edges.push(edge) : ""//console.log("object already exists")
      });
      return graph
    }

    async function parseTagsJsonld(url){
      let documentLoaderType = 'xhr'
      await jsonld.useDocumentLoader(documentLoaderType/*, options*/);
      let doc = await jsonld.documentLoader(url, function(err) {
        if(err) {
          alert(err)
        }
      })
      doc.jsonld = JSON.parse(doc.document)
      doc.jsonld.forEach((t) => {
        console.log(t)

      });

      //  delete doc.document
      //  console.log(doc)
      return doc
    }

    async function lastPart(text){
      //  console.log(text, typeof text)
      let wikidata = 'http://www.wikidata.org/entity/'
      const API_URL = 'https://www.wikidata.org/w/api.php?action=wbgetentities&origin=*&format=json'
      let language =  navigator.language.split("-")[0] || 'en'
      language+='|en'

      if (text.startsWith(wikidata)){
        let splitext = text.split(wikidata)[1]
      //  console.log(splitext)
        //  try{
        let search_url = API_URL+"&ids="+splitext+"&props=labels&languages="+language
        const res = await fetch(search_url)
      //  console.log(res)
        const json = await res.json()
        // console.log(suggestions)
        let label
        try{
          label = json.entities[splitext].labels[language] != undefined ? json.entities[splitext].labels[language].value : json.entities[splitext].labels.en.value
        }
        catch(e){
          console.log(e,json.entities)
        }
        return label
        // this.items = suggestions.search
        // console.log(this.items)
        // }catch(e){
        //   alert(e)
        // }

      }else if (typeof text == 'object' && text['rdfs:label'] != undefined){
        return text['rdfs:label']
      }else if (typeof text == 'string' && text.startsWith('http')){
        var n = text.lastIndexOf('/');
        return text.substring(n + 1);
      }
      else{
        return text
      }
    }


  }
}
// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
