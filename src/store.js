import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "reducers/rootReducer";
// we need to pass the initial state with the new look
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
