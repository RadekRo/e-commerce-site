import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import InventoryItem from './InventoryItem/InventoryItem';
import Blank from './Blank/Blank';
import CounterClass from './counter/CounterClass';


function App() {
  return (
      <div className="App">
          <Header title="hurtownia badziewia"/>
          <InventoryItem name="garbus" price="100"/>
          <InventoryItem name="konik" price="99"/>
          {/* <Blank /> */}
          <CounterClass name="Greg"/>
    </div>
  );
}

export default App;
