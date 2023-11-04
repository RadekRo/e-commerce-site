import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import InventoryItem from './InventoryItem/InventoryItem';
import Blank from './Blank/Blank';


function App() {
  return (
      <div className="App">
          <Header title="hurtownia badziewia"/>
          <InventoryItem name="garbus" price="100"/>
          <InventoryItem name="konik" price="99"/>
          {/* <Blank /> */}
    </div>
  );
}

export default App;
