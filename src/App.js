import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld/HelloWorldArrow';
import Greetings from './Greetings/Greetings';
import GreetingsClass from './Greetings/GreetingsClass';
import UsersList from './UserList/UserList';
import Counter from './Counter/Counter';
import LoginForm from './LoginForm/LoginForm';

function App() {
  return (
      <div className="App">
         {/* <HelloWorld />
          <Greetings name="Bartosz" />
          <GreetingsClass name="Dziubku" />
          <UsersList />
          <Counter /> */}
          <LoginForm /> 
    </div>
  );
}

export default App;
