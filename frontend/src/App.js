import './App.css';
import KeyboardsTable from './components/KeyboardsTable';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <LandingPage/>
      <KeyboardsTable/>
    </div>
  );
}

export default App;
