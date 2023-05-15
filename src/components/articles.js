
//import { useArticles } from "../api/usePersistedQueries";

import { useEffect, useState } from "react"
import './articles.css';

function Articles() {

    const [showArticles, setshowArticles] = useState()
    const aempublishurl = 'https://publish-p55117-e571178.adobeaemcloud.com';
    const aemurl = 'https://author-p55117-e571178.adobeaemcloud.com/graphql/execute.json/frescopa/ArticleList'+"?ts="+Math.random()*1000;
    let displayData
    let options = {credentials: "include"};
    

    async function fetchCF() {
        const response = await fetch(aemurl,options)
        // TODO - Add error handling here
        const responseData = await response.json()
        // TODO - Add error handling here
        let itemId, imageURL


        console.log(responseData)
        displayData = responseData.data.articleList.items.map(function(article,index) {
            itemId =  "urn:aemconnection:" + article._path + "/jcr:content/data/master";
            console.log(itemId)
            imageURL = aempublishurl + article.heroImage._dynamicUrl + "&width=100";

            return(
                <li key={index} itemScope itemID={itemId} itemType="reference" itemfilter="cf">
                    <img itemProp="heroImage" itemType="image" src={imageURL} />
                    <h5 itemProp="headline" itemType="text">{article.headline}</h5>
                    <div itemProp="main" itemType="richtext">{article.main['plaintext']}</div>
                </li>
            )
        })
        setshowArticles(displayData)

    }

    useEffect(() => {
        fetchCF()
    },[])

    return (
        <ul className="articleList">
        {showArticles}
        </ul>
    )

}




export default Articles;