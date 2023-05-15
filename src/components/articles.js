
//import { useArticles } from "../api/usePersistedQueries";

import { useEffect, useState } from "react"
import './articles.css';

function Articles() {

    const [showArticles, setshowArticles] = useState()
    const aemurl = 'https://author-p55117-e571178.adobeaemcloud.com/graphql/execute.json/frescopa/ArticleList'+"?ts="+Math.random()*1000;
    let displayData
    let options = {credentials: "include"};
    

    async function fetchCF() {
        const response = await fetch(aemurl,options)
        const responseData = await response.json()
        let itemId

        console.log(responseData)
        displayData = responseData.data.articleList.items.map(function(article,index) {
            itemId =  "urn:aemconnection:" + article._path + "/jcr:content/data/master";
            console.log(itemId)

            return(
                <li key={index} itemScope="" itemID={itemId} itemType="reference" itemfilter="cf">
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