import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./stylesheets/reset.css";
import "./stylesheets/index.css";
import "./stylesheets/navigation.css";
import "./stylesheets/landing.css"
import "./stylesheets/about.css";
import "./stylesheets/project.css";
import "./stylesheets/skills.css";
import "./stylesheets/education.css";
import App from "./App";

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
