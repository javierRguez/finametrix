export const FETCH_BITCOIN_BEGIN = "FETCH_BITCOIN_BEGIN";
export const FETCH_BITCOIN_SUCCESS = "FETCH_BITCOIN_SUCCESS";
export const FETCH_BITCOIN_FAILURE = "FETCH_BITCOIN_FAILURE";

export const fetchBitcoinBegin = () => ({
  type: FETCH_BITCOIN_BEGIN
});

export const fetchBitcoinSuccess = payload => ({
  type: FETCH_BITCOIN_SUCCESS,
  payload
});

export const fetchBitcoinFailure = error => ({
  type: FETCH_BITCOIN_FAILURE,
  payload: { error }
});
