import logo from './logo.svg';
import './App.css';
import Articles from './components/articles';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SecurBank Dashboard
        </p>
        <div><Articles /></div>
      </header>
    </div>
  );
}

export default App;
