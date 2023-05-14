
//import { useArticles } from "../api/usePersistedQueries";

import { useEffect, useState } from "react"



function Articles() {

    const [showArticles, setshowArticles] = useState()
    const aemurl = 'https://publish-p55117-e571178.adobeaemcloud.com/graphql/execute.json/frescopa/ArticleList';
    let displayData

    // function fetchCF() {
    //     fetch(aemurl)
    //     .then(response => response.json())
    //     .then(responseData => {
    //         displayData = responseData.data.articleList.items.map(function(article) {
    //             return(
    //                 <p key={article.index}>{article.headline}</p>
    //             )
    //         })
    //         console.log(responseData)
    //         setshowArticles(displayData)
    //     })
    //     return
    // }

    async function fetchCF() {
        const response = await fetch(aemurl)
        const responseData = await response.json()
        console.log(responseData)
        displayData = responseData.data.articleList.items.map(function(article,index) {
            return(
                <li key={index} itemscope="" itemid="urn:aemconnection:undefined/jcr:content/data/master" itemtype="reference" itemfilter="cf">
                <div itemprop="headline" itemtype="text">
                    <h5>{article.headline}</h5>
                </div>
                <div itemprop="main" itemtype="richtext">{article.main['plaintext']}</div>
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