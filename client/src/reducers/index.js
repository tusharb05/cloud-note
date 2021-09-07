import { combineReducers } from "redux";
import loginReducer from './login'
import notesReducer from "./notes";

const allReducers = combineReducers({
    loginReducer,
    notesReducer
})

export default allReducers