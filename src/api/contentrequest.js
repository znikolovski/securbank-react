export default async function FetchContent() {
  
    const aempublishurl = process.env.REACT_APP_AEM_PUBLISH;
    const aemauthorurl = process.env.REACT_APP_AEM_AUTHOR;
    const aemurl = process.env.REACT_APP_PERSISTEDQUERY_URL_DASHBOARD + `?ts=${Math.random()*1000}`;
    const offerqueryurl = process.env.REACT_APP_PERSISTEDQUERY_URL_OFFER;
    let options = {credentials: "include"};
    let url = aempublishurl + aemurl;
    let offerurl = aempublishurl + offerqueryurl;
    
    var location = window.location != window.parent.location ? 
           document.referrer :
           document.location.href;
    if(location.includes('aem/editor/canvas') > 0) {
        url = aemauthorurl + aemurl;
        offerurl = aemauthorurl + offerqueryurl;
    }

    try {
        const response = await fetch(url, options)
        // TODO - Add error handling here
        const responseData = await response.json()
        // TODO - Add error handling here
        if(responseData.data.dashboardByPath.item.offer !== null) {
            const offerPath = responseData.data.dashboardByPath.item.offer._path;
            const offerVariation = responseData.data.dashboardByPath.item.offerVariation;

            const offerResponse = await fetch(offerurl + `;path=${offerPath};variation=${offerVariation}?ts=${Math.random()*1000}`, options)
            const offerData = await offerResponse.json()
            responseData.data.dashboardByPath.item.offer.offer = offerData;
        }
        return responseData;

    } catch {
        return null
    }
}