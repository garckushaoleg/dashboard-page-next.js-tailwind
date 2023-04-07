import './App.css';
import Customers from './components/Customers/Customers.js';
import Panel from './components/Panel/Panel.js';

function App() {

  return (
    <main className="App">
      <div className="App-wrapper">
        <Panel />
        <Customers />
      </div>
    </main>
  );
}

export default App;
