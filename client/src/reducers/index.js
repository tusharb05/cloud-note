import { combineReducers } from "redux";
import loginReducer from './login'
import notesReducer from "./notes";
import showNoteReducer from "./showNote";

const allReducers = combineReducers({
    loginReducer,
    notesReducer,
    showNoteReducer
})

export default allReducers