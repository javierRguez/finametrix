import { combineReducers } from "redux";
import btcReducer from "reducers/btcReducer";

export default combineReducers({
  btcState: btcReducer
});
