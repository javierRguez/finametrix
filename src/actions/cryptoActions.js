import _ from "lodash";
const API_KEY = "YXG7ABQSNY5QX9IB";
const URL_ROOT =
  "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY";
function getBitcoinInfo() {
  return fetch(`${URL_ROOT}&symbol=BTC&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
}
function getEthereumInfo() {
  return fetch(`${URL_ROOT}&symbol=ETH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
}
function getRippleInfo() {
  return fetch(`${URL_ROOT}&symbol=XRP&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
}
/* function getBitcoinCashInfo() {
  return fetch(`${URL_ROOT}&symbol=BCH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
} */
/* function getEthereumInfo() {
  return fetch(`${URL_ROOT}&symbol=ETH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
}
function getEthereumInfo() {
  return fetch(`${URL_ROOT}&symbol=ETH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
}
function getEthereumInfo() {
  return fetch(`${URL_ROOT}&symbol=ETH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
}
function getEthereumInfo() {
  return fetch(`${URL_ROOT}&symbol=ETH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
}
function getEthereumInfo() {
  return fetch(`${URL_ROOT}&symbol=ETH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
}
function getEthereumInfo() {
  return fetch(`${URL_ROOT}&symbol=ETH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
} */
function getImageUrl(cryptoCode) {
  switch (cryptoCode) {
    case "BTC":
      return "img/Bitcoin.png";
      break;
    case "ETH":
      return "img/Etherium.png";
      break;
    case "XRP":
      return "img/Ripple.png";
      break;
    case "BCH":
      return "img/cash.png";
      break;
    case "EOS":
      return "img/Eos.png";
      break;
    case "XLM":
      return "img/stellar.png";
      break;
    case "LTC":
      return "img/Litecoin.png";
      break;
    case "ADA":
      return "img/cardano.png";
      break;
    case "XMR":
      return "img/monero.png";
      break;
    case "USDT":
      return "img/Tether.png";
      break;
    default:
      break;
  }
}
function getCryptoInfo(jsonResponse, imageUrl) {
  let informationKey = Object.keys(jsonResponse)[0];
  let nameKey = Object.keys(jsonResponse[informationKey])[2];
  let codeKey = Object.keys(jsonResponse[informationKey])[1];
  let lastUpdateKey = Object.keys(jsonResponse[informationKey])[5];
  let priceHistoryKey = Object.keys(jsonResponse)[1];
  let lastPriceHistoryKey = Object.keys(jsonResponse[priceHistoryKey])[0];
  let marketCapKey = Object.keys(
    jsonResponse[priceHistoryKey][lastPriceHistoryKey]
  )[5];
  let volumeKey = Object.keys(
    jsonResponse[priceHistoryKey][lastPriceHistoryKey]
  )[4];
  let closeKey = Object.keys(
    jsonResponse[priceHistoryKey][lastPriceHistoryKey]
  )[3];
  let bitcoinInfo = {
    image: getImageUrl(jsonResponse[informationKey][codeKey] || ""),
    name: jsonResponse[informationKey][nameKey] || "",
    code: jsonResponse[informationKey][codeKey] || "",
    marketCap:
      parseFloat(
        jsonResponse[priceHistoryKey][lastPriceHistoryKey][marketCapKey]
      ) || 0,
    lastUpdate: jsonResponse[informationKey][lastUpdateKey] || "",
    currency: "USD",
    volume: jsonResponse[priceHistoryKey][lastPriceHistoryKey][volumeKey] || "",
    closePrice:
      jsonResponse[priceHistoryKey][lastPriceHistoryKey][closeKey] || "",
    priceHistory: jsonResponse[priceHistoryKey] || {}
  };
  return bitcoinInfo;
}
export function fetchCryptos() {
  return dispatch => {
    dispatch(fetchCryptosBegin());
    let bitcoin = getEthereumInfo();
    let ethereum = getBitcoinInfo();
    let ripple = getRippleInfo();
    //let bitcoinCash = getBitcoinCashInfo();
    let cryptos = [];
    Promise.all([bitcoin, ethereum, ripple])
      .then(json => {
        for (let crypto of json) {
          cryptos.push(getCryptoInfo(crypto));
        }
        let p = _.orderBy(cryptos, ["marketCap"], ["desc"]);
        dispatch(fetchCryptosSuccess(cryptos, p));
        return cryptos;
      })
      .catch(error => dispatch(fetchCryptosFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_CRYPTOS_BEGIN = "FETCH_CRYPTOS_BEGIN";
export const FETCH_CRYPTOS_SUCCESS = "FETCH_CRYPTOS_SUCCESS";
export const FETCH_CRYPTOS_FAILURE = "FETCH_CRYPTOS_FAILURE";

export const fetchCryptosBegin = () => ({
  type: FETCH_CRYPTOS_BEGIN
});

export const fetchCryptosSuccess = (cryptos, ordenateList) => ({
  type: FETCH_CRYPTOS_SUCCESS,
  payload: { cryptos, ordenateList }
});

export const fetchCryptosFailure = error => ({
  type: FETCH_CRYPTOS_FAILURE,
  payload: { error }
});
