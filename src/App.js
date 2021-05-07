// first component
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SelectTimeZone from './components/SelectTimeZone';
import CardComponent from './components/CardComponent';
import OnceLoadashImplentation from './components/OnceLoadashImplentation'
import './App.css';


export default function App() {
  return (
    <Router>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <Link to="/">Exercise 1</Link>
          </li>
          <li>
            <Link to="/exsercise2">Exercise 2</Link>
          </li>
          <li>
            <Link to="/exsercise3">Exercise 3</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path = "/" >
          <SelectTimeZone />
          </Route>
          <Route  path = "/exsercise2" > 
          <OnceLoadashImplentation />
          </Route>
          <Route  path = "/exsercise3" > 
          <CardComponent />
          </Route>
        </Switch>          
      </div>
    </Router>
  );
}

