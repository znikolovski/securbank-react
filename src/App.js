import logo from './logo.svg';
import './App.css';
import Articles from './components/articles';

function App() {
  return (
    <div className="App">
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
