import {allReducers} from "./index";
import {createStore} from "redux";


//debugging code
export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// store.dispatch(action);

