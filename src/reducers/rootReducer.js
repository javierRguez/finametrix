import { combineReducers } from "redux";
import cryptos from "reducers/cryptoReducer";
import filter from "reducers/filterReducer";

export default combineReducers({
  cryptosInfo: cryptos,
  filter
});
