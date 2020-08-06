import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import Project from './components/Project';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';

const App = props => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Project} />
            <Route path="/skills" component={Skills} />
            <Route path="/education" component={Education} />
        </BrowserRouter>
    );
}

export default App;
