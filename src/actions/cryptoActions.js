import neoJson from "assets/localCoinInfo/neo.json";
import binancecoinJson from "assets/localCoinInfo/binancecoin.json";
import bitcoinJson from "assets/localCoinInfo/bitcoin.json";
import ethereumJson from "assets/localCoinInfo/ethereum.json";
import rippleJson from "assets/localCoinInfo/ripple.json";
import stellarJson from "assets/localCoinInfo/stellar.json";
import litecoinJson from "assets/localCoinInfo/litecoin.json";
import eosJson from "assets/localCoinInfo/eos.json";
import cardanoJson from "assets/localCoinInfo/cardano.json";
import moneroJson from "assets/localCoinInfo/monero.json";

const API_KEY = "YXG7ABQSNY5QX9IB";
const URL_ROOT =
  "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY";
function getBitcoinInfo() {
  return fetch(`${URL_ROOT}&symbol=BTC&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
  //return bitcoinJson;
}
function getEthereumInfo() {
  return fetch(`${URL_ROOT}&symbol=ETH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
  //return ethereumJson;
}
function getRippleInfo() {
  return fetch(`${URL_ROOT}&symbol=XRP&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
  //return rippleJson;
}

function getEosInfo() {
  return fetch(`${URL_ROOT}&symbol=EOS&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
  //return eosJson;
}
function getStellarInfo() {
  return fetch(`${URL_ROOT}&symbol=XLM&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
  //return stellarJson;
}
function getLitecoinInfo() {
  return fetch(`${URL_ROOT}&symbol=LTC&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
  //return litecoinJson;
}
function getCardanoInfo() {
  return fetch(`${URL_ROOT}&symbol=ADA&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
  //return cardanoJson;
}
function getMoneroInfo() {
  return fetch(`${URL_ROOT}&symbol=XMR&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
  //return moneroJson;
}
function getBinancecoinInfo() {
  return fetch(`${URL_ROOT}&symbol=BNB&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
  //return binancecoinJson;
}
function getNeoInfo() {
  return fetch(`${URL_ROOT}&symbol=NEO&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
  //return neoJson;
}
function getImageUrl(cryptoCode) {
  switch (cryptoCode) {
    case "BTC":
      return "img/Bitcoin.png";
    case "ETH":
      return "img/Etherium.png";
    case "XRP":
      return "img/Ripple.png";
    case "NEO":
      return "img/neo.png";
    case "EOS":
      return "img/Eos.png";
    case "XLM":
      return "img/stellar.png";
    case "LTC":
      return "img/Litecoin.png";
    case "ADA":
      return "img/cardano.png";
    case "XMR":
      return "img/monero.png";
    case "BNB":
      return "img/binancecoin.png";
    default:
      break;
  }
}
function formatChartData(dataHistory) {
  let chartLabels = [];
  let chartData = [];
  for (let data in dataHistory) {
    chartLabels.push(data);
    chartData.push(dataHistory[data]["4b. close (USD)"]);
  }
  return { chartLabels: chartLabels.reverse(), chartData: chartData.reverse() };
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
    volume:
      parseFloat(
        jsonResponse[priceHistoryKey][lastPriceHistoryKey][volumeKey]
      ) || 0,
    closePrice:
      parseFloat(
        jsonResponse[priceHistoryKey][lastPriceHistoryKey][closeKey]
      ) || 0,
    priceHistory: formatChartData(jsonResponse[priceHistoryKey])
  };
  return bitcoinInfo;
}
export function fetchCryptos() {
  return dispatch => {
    dispatch(fetchCryptosBegin());
    let bitcoin = getEthereumInfo();
    let ethereum = getBitcoinInfo();
    let ripple = getRippleInfo();
    let eos = getEosInfo();
    let stellar = getStellarInfo();
    let litecoin = getLitecoinInfo();
    let cardano = getCardanoInfo();
    let monero = getMoneroInfo();
    let binancecoin = getBinancecoinInfo();
    let neo = getNeoInfo();
    //let bitcoinCash = getBitcoinCashInfo();
    let cryptos = [];
    let failCryptos = [];
    Promise.all([
      bitcoin
        .then(result => {
          if (result.hasOwnProperty("Meta Data")) {
            cryptos.push(getCryptoInfo(result));
          } else {
            failCryptos.push("Bitcoin");
          }
        })
        .catch(err => console.log("prueba de er")),

      ethereum.then(result => {
        if (result.hasOwnProperty("Meta Data")) {
          cryptos.push(getCryptoInfo(result));
        } else {
          failCryptos.push("Ethereum");
        }
      }),
      ripple.then(result => {
        if (result.hasOwnProperty("Meta Data")) {
          cryptos.push(getCryptoInfo(result));
        } else {
          failCryptos.push("Ripple");
        }
      }),
      eos.then(result => {
        if (result.hasOwnProperty("Meta Data")) {
          cryptos.push(getCryptoInfo(result));
        } else {
          failCryptos.push("EOS");
        }
      }),
      stellar.then(result => {
        if (result.hasOwnProperty("Meta Data")) {
          cryptos.push(getCryptoInfo(result));
        } else {
          failCryptos.push("Stellar");
        }
      }),
      litecoin.then(result => {
        if (result.hasOwnProperty("Meta Data")) {
          cryptos.push(getCryptoInfo(result));
        } else {
          failCryptos.push("Litecoin");
        }
      }),
      cardano.then(result => {
        if (result.hasOwnProperty("Meta Data")) {
          cryptos.push(getCryptoInfo(result));
        } else {
          failCryptos.push("Cardano");
        }
      }),
      monero.then(result => {
        if (result.hasOwnProperty("Meta Data")) {
          cryptos.push(getCryptoInfo(result));
        } else {
          failCryptos.push("Monero");
        }
      }),
      binancecoin.then(result => {
        if (result.hasOwnProperty("Meta Data")) {
          cryptos.push(getCryptoInfo(result));
        } else {
          failCryptos.push("Binancecoin");
        }
      }),
      neo.then(result => {
        if (result.hasOwnProperty("Meta Data")) {
          cryptos.push(getCryptoInfo(result));
        } else {
          failCryptos.push("Neo");
        }
      })
    ])
      .then(json => {
        if (failCryptos.length > 0) {
          dispatch(fetchCryptosFailure(cryptos, failCryptos));
        } else {
          dispatch(fetchCryptosSuccess(cryptos));
        }

        return cryptos;
      })
      .catch(error => {
        console.log("error dentro");
        dispatch(fetchCryptosFailure(cryptos));
      });
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
export const GET_SELECTED_CRYPTO = "GET_SELECTED_CRYPTO";
export const CLEAR_SELECTED_CRYPTO = "CLEAR_SELECTED_CRYPTO";

export const fetchCryptosBegin = () => ({
  type: FETCH_CRYPTOS_BEGIN
});

export const fetchCryptosSuccess = cryptos => ({
  type: FETCH_CRYPTOS_SUCCESS,
  payload: { cryptos }
});

export const fetchCryptosFailure = (cryptos, failCryptos) => ({
  type: FETCH_CRYPTOS_FAILURE,
  payload: { cryptos, failCryptos }
});
export const getSelectedCrypto = crypto => ({
  type: GET_SELECTED_CRYPTO,
  payload: { crypto }
});
export const clearSelectedCrypto = () => ({
  type: CLEAR_SELECTED_CRYPTO
});
