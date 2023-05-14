import {useState, useEffect} from 'react';

function fetchAEMCF(path) {


    const aemurl = 'https://publish-p55117-e571178.adobeaemcloud.com/graphql/execute.json/frescopa/ArticleList';
    let options = {};
    let data = "data";
    let errorMessage = "";
    
    return {data,errorMessage}
}

export default fetchAEMCF;