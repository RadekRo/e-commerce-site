import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import InventoryItem from './InventoryItem/InventoryItem';
import Blank from './Blank/Blank';
import LoginForm from './LoginForm/LoginForm';


function App() {
  return (
      <div className="App">
         {/* <HelloWorld />
          <Greetings name="Bartosz" />
          <GreetingsClass name="Dziubku" />
          <UsersList />
          <Counter />
          <Header title="hurtownia badziewia"/>
          <InventoryItem name="garbus" price="100"/>
          <InventoryItem name="konik" price="99"/>
          {/* <Blank /> */}
          <LoginForm /> 
    </div>
  );
}

export default App;
