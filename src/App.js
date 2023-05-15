import logo from './resources/SecurBank_Logo_Main.svg';
import banner from './resources/banner.png';
import './App.css';
import Articles from './components/articles';
import Accountdetails from './components/accountdetails';
import Transactions from './components/transactions';
import Expenses from './components/expenses';

function App() {
  return (
    <div className="App">
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
                <li>Saving Account</li>
                <li>Transactions</li>
                <li>Cards</li>
              </ul>
            </div>
            <div>
              <div className='authFriendly'>Mark Szulc</div>
            </div>
          </div>
      </div>
        
      </header>
      <main>
        <div className='section'>
          <div><img src={banner} className="banner" alt="banner" /></div>
          <div>
            <Accountdetails />
          </div>
          <div className='twocol'>
            <Transactions/>
            <Expenses />
          </div>
          <div>
            <Articles />
            </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
