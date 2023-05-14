import { useEffect, useState } from "react";

/**
 * Private, shared function that invokes the AEM Headless client.
 * 
 * @param {String} persistedQueryName the fully qualified name of the persisted query
 * @param {*} queryParameters an optional JavaScript object containing query parameters
 * @returns the GraphQL data or an error message 
 */
async function fetchPersistedQuery(persistedQueryName, queryParameters) {
  let data;
  let err;

  try {
    const aemurl = 'https://publish-p55117-e571178.adobeaemcloud.com/graphql/execute.json/frescopa/ArticleList';
    let options = {};

    const cfReq = await fetch(aemurl.trim()+"?ts="+Math.random()*1000, options)
        .then((response) => response.json());
        data = cfReq;
        return { data, err };


} catch (e) {
    err = e
}
//   try {
//     // AEM GraphQL queries are asynchronous, either await their return or use Promise-based .then(..) { ... } syntax
//     const response = await aemHeadlessClient.runPersistedQuery(
//       persistedQueryName,
//       queryParameters
//     );
//     // The GraphQL data is stored on the response's data field
//     data = response?.data;
//   } catch (e) {
//     // An error occurred, return the error messages
//     err = e
//       .toJSON()
//       ?.map((error) => error.message)
//       ?.join(", ");
//     console.error(e.toJSON());
//   }

  return { data, err };
}


export function useArticles(adventureActivity) {

  const [adventures, setAdventures] = useState(null);
  const [errors, setErrors] = useState(null);

  // Use React useEffect to manage state changes
  useEffect(() => {
    async function fetchData() {

      let response;
      let queryParameters;

      response = await fetchPersistedQuery("frescopa/ArticleList", queryParameters);
    
      console.log(response.data?.data?.articleList?.items);
      // Sets the adventures variable to the list of adventure JSON objects
      setAdventures(response.data?.data?.articleList?.items);

      // Set any errors
      setErrors(response.err);
    }
    // Call the internal fetchData() as per React best practices
    fetchData();

  }, [adventureActivity]);
  console.log("Articles");
  console.log(adventures);
  // Returns the adventures and errors
  return { adventures, errors };
}

