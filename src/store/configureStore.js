import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware()),
    );
};

export default configureStore;
