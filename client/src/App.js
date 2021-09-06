import Register from "./components/Register/Register";
import Login from "./components/Login/Login"
import Home from "./components/Home/Home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/register" exact component={Register}/>
          
          <Route path="/login" exact component={Login}/>

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
