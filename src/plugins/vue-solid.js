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
import {
  // handleIncomingRedirect,
  //  login,
  fetch,
  // getDefaultSession,
  //  onSessionRestore,
  /* getSessionIdFromStorageAll,*/
  /*getSessionFromStorage */
} from '@inrupt/solid-client-authn-browser'



const plugin = {
  install(Vue, /*opts = {}*/) {
  //  let store = opts.store

    Vue.prototype.$getPodInfos = async function(pod){
      try{
        const dataset = await getSolidDataset( pod.webId, { fetch: fetch });
        let profile = await getThing( dataset, pod.webId );
        pod.name = await getStringNoLocale(profile, FOAF.name);
        pod.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        pod.storage = await getUrl(profile, WS.storage);
        pod.photo = await getUrl(profile, VCARD.hasPhoto);
        pod.publicTags = await this.$getTags(pod.storage+'public/tags.ttl')
        console.log("getpodinfos",pod)
      }catch(e)
      {
        console.log("erreur",e, pod)
      }
      return await pod
    }

    Vue.prototype.$getTags = async function (tagFile){
      try{
        const tagDataset = await getSolidDataset( tagFile, { fetch: fetch });
        return await getThingAll(tagDataset, tagFile);
      }catch(e){
        return []
      }
    }


  }
}
// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
