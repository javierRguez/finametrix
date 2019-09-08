import { combineReducers } from "redux";
import cryptos from "reducers/bitcoinReducer";

export default combineReducers({
  cryptosInfo: cryptos
});
