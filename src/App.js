import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import InventoryItem from './InventoryItem/InventoryItem';
import Blank from './Blank/Blank';
import LoginForm from './LoginForm/LoginForm';
import BlogPostWriter from './BlogPostWriter/BlogPostWriter';
import GameResult from './GameResult/GameResult';
import LifeCycle from './LifeCycle/LifeCycle';

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
          <Blank />
          <BlogPostWriter title="Blog Post Writer"/>
        <GameResult teamOne="LECHIA" teamTwo="ARKA" />
        <LoginForm />  */}
        <LifeCycle />
    </div>
  );
}

export default App;
