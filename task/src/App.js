import React,  { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./routes/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
          <Router>
              {Routes.map((route, index) => (
                  <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                  />
              ))}
          </Router>
      );
  }
}

export default App;

