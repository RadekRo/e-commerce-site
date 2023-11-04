import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld/HelloWorldArrow';
import Greetings from './Greetings/Greetings';
import GreetingsClass from './Greetings/GreetingsClass';
import UsersList from './UserList/UserList';

function App() {
  return (
      <div className="App">
          <HelloWorld />
          <Greetings name="Bartosz" />
          <GreetingsClass name="Dziubku" />
          <UsersList />
    </div>
  );
}

export default App;
