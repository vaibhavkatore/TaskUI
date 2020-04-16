import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./routes/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faAtom,
    faThLarge,
    faUser,
    faClipboard,
    faClone,
    faShapes,
    faMapMarkerAlt,
    faBell,
    faGlobe,
    faSearch

} from '@fortawesome/free-solid-svg-icons';

library.add(
    fab,
    faAtom,
    faThLarge,
    faUser,
    faClipboard,
    faClone,
    faShapes,
    faMapMarkerAlt,
    faBell,
    faGlobe,
    faSearch
)
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

