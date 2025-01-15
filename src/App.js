import React, { useState, useEffect } from 'react';

import logo from './resources/SecurBank_Logo_Main.svg';
import bell from './resources/bell.svg';
import avatar from './resources/avatar.jpeg';
import './App.css';
import Articles from './components/articles';
import Accountbalance from './components/accountbalance';
import Transactions from './components/transactions';
import Expenses from './components/expenses';
import CreditCardDetails from './components/creditcarddetails';
import Footer from './components/footer';
import FetchContent from './api/contentrequest';
import FAQ from './components/faq';

import { Helmet } from 'react-helmet-async';

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const result = await FetchContent();
      setContent(result.data.dashboardByPath.item);
    };

    fetchContent();
  }, []);

  const itemId =  "urn:aemconnection:/content/dam/securbank/en/dashboard/account-dashboard/jcr:content/data/master";

  return (
    <div className="App">
      <Helmet>
        <meta name="urn:adobe:aue:system:aemconnection" content={'aem:'+process.env.REACT_APP_AEM_AUTHOR}></meta>
      </Helmet>
      <header className="App-header">
        <div className='header-alerts'>
            <p><strong>Alert!</strong> Scams are growing ever more complex and sophisticated. Learn more about protecting yourself from scams</p>
        </div>
        <div className='header-nav'>
          <div>
            <img src={logo} className="logo" alt="logo" />
            <div>
              <ul>
                <li><strong>Dashboard</strong></li>
                <li><a href="#">Saving Account</a></li>
                <li><a href="#">Transactions</a></li>
                <li><a href="#">Cards</a></li>
              </ul>
            </div>
            <div>
              <img src={bell} className="bell" alt="bell" />
              <img src={avatar} className="avatar" alt="avatar" />
              <div className='authFriendly'>Zoran Nikolovski</div>
            </div>
          </div>
      </div>
        
      </header>
      <main >
        <div className='section'>
          <div>
            {content && content.offer !== null ? 
              (<div class="offer-wrapper" data-aue-resource={itemId} data-aue-type="reference" data-aue-filter="cf"><div class="offer block">
                <div class="banner-content" data-aue-resource={"urn:aemconnection:"+content.offer._path+"/jcr:content/data/master"} data-aue-label="offer content fragment" data-aue-type="reference" data-aue-filter="cf">
                    <div data-aue-prop="heroImage" data-aue-label="hero image" data-aue-type="media" className="banner-detail" style={{backgroundImage: "linear-gradient(90deg,rgba(0,0,0,0.6), rgba(0,0,0,0.1) 80%) ,url("+content.offer.heroImage._publishUrl+")"}}>
                        <p data-aue-prop="headline" data-aue-label="headline" data-aue-type="text" className="pretitle">{content.offer.headlie}</p>
                        <p data-aue-prop="pretitle" data-aue-label="pretitle" data-aue-type="text" className="headline">{content.offer.pretitle}</p>
                        <p data-aue-prop="detail" data-aue-label="detail" data-aue-type="richtext" className="detail">{content.offer.detail.plaintext}</p>
                    </div>
                    <div class="banner-logo">
                    </div>
                </div>
              </div></div>) : 
              (<div data-aue-resource={itemId} data-aue-type="reference" data-aue-filter="cf"><a href={content && content.bannerUrl}><img src={content && content.banner._publishUrl} className="banner" alt="banner" data-aue-prop="banner"  data-aue-type="media"  /></a></div>)}
          </div>
          
          <div className='twocol'>
            <Accountbalance greeting={content && content.greeting} />
            <CreditCardDetails cardLabel={content && content.cardLabel}  />
          </div>
          <div className='twocol'>
            <Transactions transactionTitle={content && content.transactionTitle}/>
            <Expenses expensesTitle={content && content.expensesTitle} />
          </div>
          <div>
            <FAQ faq={content && content.articles} />
          </div>
          <div>
            <Articles articles={content && content.articles} />
          </div>
        </div>
      </main>

      <footer><Footer /></footer>
    </div>
  );
}

export default App;
