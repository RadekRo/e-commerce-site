import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import HelloWorld from './HelloWorld/HelloWorldArrow';
import Greetings from './Greetings/Greetings';
import GreetingsClass from './Greetings/GreetingsClass';
import UsersList from './UserList/UserList';
import Counter from './Counter/Counter';
import LoginForm from './LoginForm/LoginForm';
=======
import Header from './Header/Header';
import InventoryItem from './InventoryItem/InventoryItem';
import Blank from './Blank/Blank';
import CounterClass from './counter/CounterClass';

>>>>>>> 324a33bfaf466875c3022abb0b62f946ab6c1bed

function App() {
  return (
      <div className="App">
<<<<<<< HEAD
         {/* <HelloWorld />
          <Greetings name="Bartosz" />
          <GreetingsClass name="Dziubku" />
          <UsersList />
          <Counter /> */}
          <LoginForm /> 
=======
          <Header title="hurtownia badziewia"/>
          <InventoryItem name="garbus" price="100"/>
          <InventoryItem name="konik" price="99"/>
          {/* <Blank /> */}
          <CounterClass name="Greg"/>
>>>>>>> 324a33bfaf466875c3022abb0b62f946ab6c1bed
    </div>
  );
}

export default App;
