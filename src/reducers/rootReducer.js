import { combineReducers } from "redux";
import modalReducer from "../reducers/modalReducer";

const rootReducer = combineReducers({
    modal: modalReducer,
});

export default rootReducer;
