export default async function Article() {

    const aemurl = 'https://publish-p55117-e571178.adobeaemcloud.com/graphql/execute.json/frescopa/ArticleList';
    let options = {};

    const cfReq = await fetch(aemurl.trim()+"?ts="+Math.random()*1000, options)
        .then((response) => response.json());
              
    const Article = ({headline, main, heroImage}) => {

        let description = main['plaintext'];

        return (
            <li itemscope="" itemid="urn:aemconnection:undefined/jcr:content/data/master" itemtype="reference" itemfilter="cf">
                <div itemprop="headline" itemtype="text">
                    <h5>{headline}</h5>
                </div>
                <div itemprop="main" itemtype="richtext">{description}</div>
            </li>
        )
    };

    return(
        <div className="foo">
            <ul>        
                {
                    cfReq.data.articleList.items.map((article,index) => {
                        return (
                            <Article key={index} {...article}></Article>
                        );
                    })
                }
            </ul>
        </div>
    )
}





