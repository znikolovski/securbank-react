
//import { useArticles } from "../api/usePersistedQueries";

import { useEffect, useState } from "react"



function Articles() {


    const [showArticles, setshowArticles] = useState()
    const aemurl = 'https://publish-p55117-e571178.adobeaemcloud.com/graphql/execute.json/frescopa/ArticleList'+"?ts="+Math.random()*1000;
    let displayData

    async function fetchCF() {
        const response = await fetch(aemurl)
        const responseData = await response.json()
        let itemId

        console.log(responseData)
        displayData = responseData.data.articleList.items.map(function(article,index) {
            itemId =  "urn:aemconnection:" + article._path + "/jcr:content/data/master";
            console.log(itemId)

            return(
                <li key={index} itemScope="" itemId={itemId} itemType="reference" itemfilter="cf">
                <div itemProp="headline" itemType="text">
                    <h5>{article.headline}</h5>
                </div>
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
        <ul>
        {showArticles}
        </ul>
    )

}




export default Articles;