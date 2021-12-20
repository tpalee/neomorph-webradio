import './App.css';
import Radio from "../src/components/radio/Radio";
import Login from '../src/pages/login/Login'
import{Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/"><Radio/></Route>
          <Route exact path="/login"><Login/>></Route>
      <h1>Radio player</h1>
      
      </Switch>
      </main>
    </div>
  );
}

export default App;
