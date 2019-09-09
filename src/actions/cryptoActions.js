const API_KEY = "YXG7ABQSNY5QX9IB";
const URL_ROOT =
  "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY";
function getBitcoinInfo() {
  /* return fetch(`${URL_ROOT}&symbol=BTC&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json()); */
  return {
    "Meta Data": {
      "1. Information": "Daily Prices and Volumes for Digital Currency",
      "2. Digital Currency Code": "BTC",
      "3. Digital Currency Name": "Bitcoin",
      "4. Market Code": "EUR",
      "5. Market Name": "Euro",
      "6. Last Refreshed": "2019-09-09 00:00:00",
      "7. Time Zone": "UTC"
    },
    "Time Series (Digital Currency Daily)": {
      "2019-09-09": {
        "1a. open (EUR)": "9417.86092800",
        "1b. open (USD)": "10381.24000000",
        "2a. high (EUR)": "9439.18012800",
        "2b. high (USD)": "10404.74000000",
        "3a. low (EUR)": "9406.63886400",
        "3b. low (USD)": "10368.87000000",
        "4a. close (EUR)": "9426.52468800",
        "4b. close (USD)": "10390.79000000",
        "5. volume": "219.63370800",
        "6. market cap (USD)": "219.63370800"
      },
      "2019-09-08": {
        "1a. open (EUR)": "9485.59248000",
        "1b. open (USD)": "10455.90000000",
        "2a. high (EUR)": "9609.51600000",
        "2b. high (USD)": "10592.50000000",
        "3a. low (EUR)": "9260.69760000",
        "3b. low (USD)": "10208.00000000",
        "4a. close (EUR)": "9417.80649600",
        "4b. close (USD)": "10381.18000000",
        "5. volume": "23984.67201800",
        "6. market cap (USD)": "23984.67201800"
      },
      "2019-09-07": {
        "1a. open (EUR)": "9342.98971200",
        "1b. open (USD)": "10298.71000000",
        "2a. high (EUR)": "9578.21760000",
        "2b. high (USD)": "10558.00000000",
        "3a. low (EUR)": "9333.79070400",
        "3b. low (USD)": "10288.57000000",
        "4a. close (EUR)": "9485.57433600",
        "4b. close (USD)": "10455.88000000",
        "5. volume": "27637.87739200",
        "6. market cap (USD)": "27637.87739200"
      },
      "2019-09-06": {
        "1a. open (EUR)": "9582.87153600",
        "1b. open (USD)": "10563.13000000",
        "2a. high (EUR)": "9893.80526400",
        "2b. high (USD)": "10905.87000000",
        "3a. low (EUR)": "9208.08000000",
        "3b. low (USD)": "10150.00000000",
        "4a. close (EUR)": "9343.00785600",
        "4b. close (USD)": "10298.73000000",
        "5. volume": "58799.64095900",
        "6. market cap (USD)": "58799.64095900"
      }
    }
  };
}
function getEthereumInfo() {
  /*  return fetch(`${URL_ROOT}&symbol=ETH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json()); */
  return {
    "Meta Data": {
      "1. Information": "Daily Prices and Volumes for Digital Currency",
      "2. Digital Currency Code": "ETH",
      "3. Digital Currency Name": "Ethereum",
      "4. Market Code": "EUR",
      "5. Market Name": "Euro",
      "6. Last Refreshed": "2019-09-09 00:00:00",
      "7. Time Zone": "UTC"
    },
    "Time Series (Digital Currency Daily)": {
      "2019-09-09": {
        "1a. open (EUR)": "164.36649600",
        "1b. open (USD)": "181.18000000",
        "2a. high (EUR)": "164.79288000",
        "2b. high (USD)": "181.65000000",
        "3a. low (EUR)": "163.48651200",
        "3b. low (USD)": "180.21000000",
        "4a. close (EUR)": "163.59537600",
        "4b. close (USD)": "180.33000000",
        "5. volume": "4255.90496000",
        "6. market cap (USD)": "4255.90496000"
      },
      "2019-09-08": {
        "1a. open (EUR)": "161.10057600",
        "1b. open (USD)": "177.58000000",
        "2a. high (EUR)": "167.08809600",
        "2b. high (USD)": "184.18000000",
        "3a. low (EUR)": "159.78513600",
        "3b. low (USD)": "176.13000000",
        "4a. close (EUR)": "164.37556800",
        "4b. close (USD)": "181.19000000",
        "5. volume": "290083.47501000",
        "6. market cap (USD)": "290083.47501000"
      },
      "2019-09-07": {
        "1a. open (EUR)": "153.41659200",
        "1b. open (USD)": "169.11000000",
        "2a. high (EUR)": "164.02176000",
        "2b. high (USD)": "180.80000000",
        "3a. low (EUR)": "152.68176000",
        "3b. low (USD)": "168.30000000",
        "4a. close (EUR)": "161.13686400",
        "4b. close (USD)": "177.62000000",
        "5. volume": "253831.23169000",
        "6. market cap (USD)": "253831.23169000"
      }
    }
  };
}
function getRippleInfo() {
  /*  return fetch(`${URL_ROOT}&symbol=XRP&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json()); */
  return {
    "Meta Data": {
      "1. Information": "Daily Prices and Volumes for Digital Currency",
      "2. Digital Currency Code": "XRP",
      "3. Digital Currency Name": "Ripple",
      "4. Market Code": "EUR",
      "5. Market Name": "Euro",
      "6. Last Refreshed": "2019-09-09 00:00:00",
      "7. Time Zone": "UTC"
    },
    "Time Series (Digital Currency Daily)": {
      "2019-09-09": {
        "1a. open (EUR)": "0.23773176",
        "1b. open (USD)": "0.26205000",
        "2a. high (EUR)": "0.23853917",
        "2b. high (USD)": "0.26294000",
        "3a. low (EUR)": "0.23724187",
        "3b. low (USD)": "0.26151000",
        "4a. close (EUR)": "0.23815814",
        "4b. close (USD)": "0.26252000",
        "5. volume": "1328772.70000000",
        "6. market cap (USD)": "1328772.70000000"
      },
      "2019-09-08": {
        "1a. open (EUR)": "0.23577221",
        "1b. open (USD)": "0.25989000",
        "2a. high (EUR)": "0.24123355",
        "2b. high (USD)": "0.26591000",
        "3a. low (EUR)": "0.23178960",
        "3b. low (USD)": "0.25550000",
        "4a. close (EUR)": "0.23773176",
        "4b. close (USD)": "0.26205000",
        "5. volume": "65033003.60000000",
        "6. market cap (USD)": "65033003.60000000"
      },
      "2019-09-07": {
        "1a. open (EUR)": "0.22784328",
        "1b. open (USD)": "0.25115000",
        "2a. high (EUR)": "0.23845752",
        "2b. high (USD)": "0.26285000",
        "3a. low (EUR)": "0.22688165",
        "3b. low (USD)": "0.25009000",
        "4a. close (EUR)": "0.23580850",
        "4b. close (USD)": "0.25993000",
        "5. volume": "53971229.00000000",
        "6. market cap (USD)": "53971229.00000000"
      },
      "2019-09-06": {
        "1a. open (EUR)": "0.23238835",
        "1b. open (USD)": "0.25616000",
        "2a. high (EUR)": "0.23467450",
        "2b. high (USD)": "0.25868000",
        "3a. low (EUR)": "0.22400582",
        "3b. low (USD)": "0.24692000",
        "4a. close (EUR)": "0.22779792",
        "4b. close (USD)": "0.25110000",
        "5. volume": "63377736.50000000",
        "6. market cap (USD)": "63377736.50000000"
      },
      "2019-09-05": {
        "1a. open (EUR)": "0.23444770",
        "1b. open (USD)": "0.25843000",
        "2a. high (EUR)": "0.23530046",
        "2b. high (USD)": "0.25937000",
        "3a. low (EUR)": "0.22985726",
        "3b. low (USD)": "0.25337000",
        "4a. close (EUR)": "0.23239742",
        "4b. close (USD)": "0.25617000",
        "5. volume": "43270120.30000000",
        "6. market cap (USD)": "43270120.30000000"
      },
      "2019-09-04": {
        "1a. open (EUR)": "0.23815814",
        "1b. open (USD)": "0.26252000",
        "2a. high (EUR)": "0.23858453",
        "2b. high (USD)": "0.26299000",
        "3a. low (EUR)": "0.23222506",
        "3b. low (USD)": "0.25598000",
        "4a. close (EUR)": "0.23444770",
        "4b. close (USD)": "0.25843000",
        "5. volume": "49398294.20000000",
        "6. market cap (USD)": "49398294.20000000"
      },
      "2019-09-03": {
        "1a. open (EUR)": "0.23641632",
        "1b. open (USD)": "0.26060000",
        "2a. high (EUR)": "0.24222240",
        "2b. high (USD)": "0.26700000",
        "3a. low (EUR)": "0.23361307",
        "3b. low (USD)": "0.25751000",
        "4a. close (EUR)": "0.23806742",
        "4b. close (USD)": "0.26242000",
        "5. volume": "56305107.10000000",
        "6. market cap (USD)": "56305107.10000000"
      },
      "2019-09-02": {
        "1a. open (EUR)": "0.23220691",
        "1b. open (USD)": "0.25596000",
        "2a. high (EUR)": "0.23975482",
        "2b. high (USD)": "0.26428000",
        "3a. low (EUR)": "0.22947624",
        "3b. low (USD)": "0.25295000",
        "4a. close (EUR)": "0.23641632",
        "4b. close (USD)": "0.26060000",
        "5. volume": "60783394.60000000",
        "6. market cap (USD)": "60783394.60000000"
      },
      "2019-09-01": {
        "1a. open (EUR)": "0.23357678",
        "1b. open (USD)": "0.25747000",
        "2a. high (EUR)": "0.23488315",
        "2b. high (USD)": "0.25891000",
        "3a. low (EUR)": "0.22680000",
        "3b. low (USD)": "0.25000000",
        "4a. close (EUR)": "0.23217970",
        "4b. close (USD)": "0.25593000",
        "5. volume": "32881805.20000000",
        "6. market cap (USD)": "32881805.20000000"
      },
      "2019-08-31": {
        "1a. open (EUR)": "0.23170795",
        "1b. open (USD)": "0.25541000",
        "2a. high (EUR)": "0.23629838",
        "2b. high (USD)": "0.26047000",
        "3a. low (EUR)": "0.22941274",
        "3b. low (USD)": "0.25288000",
        "4a. close (EUR)": "0.23357678",
        "4b. close (USD)": "0.25747000",
        "5. volume": "36321425.50000000",
        "6. market cap (USD)": "36321425.50000000"
      }
    }
  };
}

function getEosInfo() {
  /*  return fetch(`${URL_ROOT}&symbol=EOS&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json()); */
  return {
    "Meta Data": {
      "1. Information": "Daily Prices and Volumes for Digital Currency",
      "2. Digital Currency Code": "EOS",
      "3. Digital Currency Name": "EOS",
      "4. Market Code": "EUR",
      "5. Market Name": "Euro",
      "6. Last Refreshed": "2019-09-09 00:00:00",
      "7. Time Zone": "UTC"
    },
    "Time Series (Digital Currency Daily)": {
      "2019-09-09": {
        "1a. open (EUR)": "3.42924556",
        "1b. open (USD)": "3.78170000",
        "2a. high (EUR)": "3.45137148",
        "2b. high (USD)": "3.80610000",
        "3a. low (EUR)": "3.28715000",
        "3b. low (USD)": "3.62500000",
        "4a. close (EUR)": "3.33394088",
        "4b. close (USD)": "3.67660000",
        "5. volume": "1453976.41000000",
        "6. market cap (USD)": "1453976.41000000"
      },
      "2019-09-08": {
        "1a. open (EUR)": "3.22829868",
        "1b. open (USD)": "3.56010000",
        "2a. high (EUR)": "3.48102384",
        "2b. high (USD)": "3.83880000",
        "3a. low (EUR)": "3.17380000",
        "3b. low (USD)": "3.50000000",
        "4a. close (EUR)": "3.42770400",
        "4b. close (USD)": "3.78000000",
        "5. volume": "9357345.04000000",
        "6. market cap (USD)": "9357345.04000000"
      },
      "2019-09-07": {
        "1a. open (EUR)": "2.91155344",
        "1b. open (USD)": "3.21080000",
        "2a. high (EUR)": "3.32886280",
        "2b. high (USD)": "3.67100000",
        "3a. low (EUR)": "2.89441492",
        "3b. low (USD)": "3.19190000",
        "4a. close (EUR)": "3.22929616",
        "4b. close (USD)": "3.56120000",
        "5. volume": "7785102.96000000",
        "6. market cap (USD)": "7785102.96000000"
      },
      "2019-09-06": {
        "1a. open (EUR)": "2.96106472",
        "1b. open (USD)": "3.26540000",
        "2a. high (EUR)": "3.07332656",
        "2b. high (USD)": "3.38920000",
        "3a. low (EUR)": "2.81108000",
        "3b. low (USD)": "3.10000000",
        "4a. close (EUR)": "2.91200684",
        "4b. close (USD)": "3.21130000",
        "5. volume": "5418898.41000000",
        "6. market cap (USD)": "5418898.41000000"
      },
      "2019-09-05": {
        "1a. open (EUR)": "2.99552312",
        "1b. open (USD)": "3.30340000",
        "2a. high (EUR)": "3.01937196",
        "2b. high (USD)": "3.32970000",
        "3a. low (EUR)": "2.89586580",
        "3b. low (USD)": "3.19350000",
        "4a. close (EUR)": "2.96197152",
        "4b. close (USD)": "3.26640000",
        "5. volume": "2629192.77000000",
        "6. market cap (USD)": "2629192.77000000"
      },
      "2019-09-04": {
        "1a. open (EUR)": "3.03877748",
        "1b. open (USD)": "3.35110000",
        "2a. high (EUR)": "3.04920568",
        "2b. high (USD)": "3.36260000",
        "3a. low (EUR)": "2.96070200",
        "3b. low (USD)": "3.26500000",
        "4a. close (EUR)": "2.99615788",
        "4b. close (USD)": "3.30410000",
        "5. volume": "2687490.42000000",
        "6. market cap (USD)": "2687490.42000000"
      },
      "2019-09-03": {
        "1a. open (EUR)": "3.00948784",
        "1b. open (USD)": "3.31880000",
        "2a. high (EUR)": "3.13988568",
        "2b. high (USD)": "3.46260000",
        "3a. low (EUR)": "2.98010752",
        "3b. low (USD)": "3.28640000",
        "4a. close (EUR)": "3.03759864",
        "4b. close (USD)": "3.34980000",
        "5. volume": "4785784.48000000",
        "6. market cap (USD)": "4785784.48000000"
      }
    }
  };
}
function getStellarInfo() {
  /*  return fetch(`${URL_ROOT}&symbol=XLM&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json()); */
  return {
    "Meta Data": {
      "1. Information": "Daily Prices and Volumes for Digital Currency",
      "2. Digital Currency Code": "XLM",
      "3. Digital Currency Name": "Stellar",
      "4. Market Code": "EUR",
      "5. Market Name": "Euro",
      "6. Last Refreshed": "2019-09-09 00:00:00",
      "7. Time Zone": "UTC"
    },
    "Time Series (Digital Currency Daily)": {
      "2019-09-09": {
        "1a. open (EUR)": "0.05536360",
        "1b. open (USD)": "0.06100000",
        "2a. high (EUR)": "0.05554512",
        "2b. high (USD)": "0.06120000",
        "3a. low (EUR)": "0.05536360",
        "3b. low (USD)": "0.06100000",
        "4a. close (EUR)": "0.05549066",
        "4b. close (USD)": "0.06114000",
        "5. volume": "367470.40000000",
        "6. market cap (USD)": "367470.40000000"
      },
      "2019-09-08": {
        "1a. open (EUR)": "0.05490980",
        "1b. open (USD)": "0.06050000",
        "2a. high (EUR)": "0.05607153",
        "2b. high (USD)": "0.06178000",
        "3a. low (EUR)": "0.05436524",
        "3b. low (USD)": "0.05990000",
        "4a. close (EUR)": "0.05540898",
        "4b. close (USD)": "0.06105000",
        "5. volume": "18420380.70000000",
        "6. market cap (USD)": "18420380.70000000"
      },
      "2019-09-07": {
        "1a. open (EUR)": "0.05264080",
        "1b. open (USD)": "0.05800000",
        "2a. high (EUR)": "0.05543621",
        "2b. high (USD)": "0.06108000",
        "3a. low (EUR)": "0.05253189",
        "3b. low (USD)": "0.05788000",
        "4a. close (EUR)": "0.05493703",
        "4b. close (USD)": "0.06053000",
        "5. volume": "19328421.30000000",
        "6. market cap (USD)": "19328421.30000000"
      },
      "2019-09-06": {
        "1a. open (EUR)": "0.05467382",
        "1b. open (USD)": "0.06024000",
        "2a. high (EUR)": "0.05536360",
        "2b. high (USD)": "0.06100000",
        "3a. low (EUR)": "0.05235037",
        "3b. low (USD)": "0.05768000",
        "4a. close (EUR)": "0.05264988",
        "4b. close (USD)": "0.05801000",
        "5. volume": "24204438.40000000",
        "6. market cap (USD)": "24204438.40000000"
      },
      "2019-09-05": {
        "1a. open (EUR)": "0.05605338",
        "1b. open (USD)": "0.06176000",
        "2a. high (EUR)": "0.05628935",
        "2b. high (USD)": "0.06202000",
        "3a. low (EUR)": "0.05434709",
        "3b. low (USD)": "0.05988000",
        "4a. close (EUR)": "0.05469198",
        "4b. close (USD)": "0.06026000",
        "5. volume": "16559115.40000000",
        "6. market cap (USD)": "16559115.40000000"
      },
      "2019-09-04": {
        "1a. open (EUR)": "0.05721510",
        "1b. open (USD)": "0.06304000",
        "2a. high (EUR)": "0.05723326",
        "2b. high (USD)": "0.06306000",
        "3a. low (EUR)": "0.05562680",
        "3b. low (USD)": "0.06129000",
        "4a. close (EUR)": "0.05598077",
        "4b. close (USD)": "0.06168000",
        "5. volume": "10463344.30000000",
        "6. market cap (USD)": "10463344.30000000"
      },
      "2019-09-03": {
        "1a. open (EUR)": "0.05715157",
        "1b. open (USD)": "0.06297000",
        "2a. high (EUR)": "0.05816808",
        "2b. high (USD)": "0.06409000",
        "3a. low (EUR)": "0.05659794",
        "3b. low (USD)": "0.06236000",
        "4a. close (EUR)": "0.05725141",
        "4b. close (USD)": "0.06308000",
        "5. volume": "12561061.90000000",
        "6. market cap (USD)": "12561061.90000000"
      },
      "2019-09-02": {
        "1a. open (EUR)": "0.05638011",
        "1b. open (USD)": "0.06212000",
        "2a. high (EUR)": "0.05775059",
        "2b. high (USD)": "0.06363000",
        "3a. low (EUR)": "0.05543621",
        "3b. low (USD)": "0.06108000",
        "4a. close (EUR)": "0.05718788",
        "4b. close (USD)": "0.06301000",
        "5. volume": "9321519.80000000",
        "6. market cap (USD)": "9321519.80000000"
      },
      "2019-09-01": {
        "1a. open (EUR)": "0.05623490",
        "1b. open (USD)": "0.06196000",
        "2a. high (EUR)": "0.05691560",
        "2b. high (USD)": "0.06271000",
        "3a. low (EUR)": "0.05514578",
        "3b. low (USD)": "0.06076000",
        "4a. close (EUR)": "0.05638011",
        "4b. close (USD)": "0.06212000",
        "5. volume": "8220163.20000000",
        "6. market cap (USD)": "8220163.20000000"
      },
      "2019-08-31": {
        "1a. open (EUR)": "0.05621674",
        "1b. open (USD)": "0.06194000",
        "2a. high (EUR)": "0.05680668",
        "2b. high (USD)": "0.06259000",
        "3a. low (EUR)": "0.05455584",
        "3b. low (USD)": "0.06011000",
        "4a. close (EUR)": "0.05621674",
        "4b. close (USD)": "0.06194000",
        "5. volume": "8646460.90000000",
        "6. market cap (USD)": "8646460.90000000"
      },
      "2019-08-30": {
        "1a. open (EUR)": "0.05598077",
        "1b. open (USD)": "0.06168000",
        "2a. high (EUR)": "0.05741478",
        "2b. high (USD)": "0.06326000",
        "3a. low (EUR)": "0.05545436",
        "3b. low (USD)": "0.06110000",
        "4a. close (EUR)": "0.05618952",
        "4b. close (USD)": "0.06191000",
        "5. volume": "10766084.40000000",
        "6. market cap (USD)": "10766084.40000000"
      }
    }
  };
}
function getLitecoinInfo() {
  /* return fetch(`${URL_ROOT}&symbol=LTC&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json()); */
  return {
    "Meta Data": {
      "1. Information": "Daily Prices and Volumes for Digital Currency",
      "2. Digital Currency Code": "LTC",
      "3. Digital Currency Name": "Litecoin",
      "4. Market Code": "EUR",
      "5. Market Name": "Euro",
      "6. Last Refreshed": "2019-09-09 00:00:00",
      "7. Time Zone": "UTC"
    },
    "Time Series (Digital Currency Daily)": {
      "2019-09-09": {
        "1a. open (EUR)": "63.83059200",
        "1b. open (USD)": "70.36000000",
        "2a. high (EUR)": "63.89409600",
        "2b. high (USD)": "70.43000000",
        "3a. low (EUR)": "63.53121600",
        "3b. low (USD)": "70.03000000",
        "4a. close (EUR)": "63.85780800",
        "4b. close (USD)": "70.39000000",
        "5. volume": "2349.44394000",
        "6. market cap (USD)": "2349.44394000"
      },
      "2019-09-08": {
        "1a. open (EUR)": "62.38814400",
        "1b. open (USD)": "68.77000000",
        "2a. high (EUR)": "64.82851200",
        "2b. high (USD)": "71.46000000",
        "3a. low (EUR)": "61.68960000",
        "3b. low (USD)": "68.00000000",
        "4a. close (EUR)": "63.83059200",
        "4b. close (USD)": "70.36000000",
        "5. volume": "315059.92831000",
        "6. market cap (USD)": "315059.92831000"
      },
      "2019-09-07": {
        "1a. open (EUR)": "58.85913600",
        "1b. open (USD)": "64.88000000",
        "2a. high (EUR)": "64.02110400",
        "2b. high (USD)": "70.57000000",
        "3a. low (EUR)": "58.54161600",
        "3b. low (USD)": "64.53000000",
        "4a. close (EUR)": "62.38814400",
        "4b. close (USD)": "68.77000000",
        "5. volume": "305501.47722000",
        "6. market cap (USD)": "305501.47722000"
      },
      "2019-09-06": {
        "1a. open (EUR)": "59.18572800",
        "1b. open (USD)": "65.24000000",
        "2a. high (EUR)": "61.68960000",
        "2b. high (USD)": "68.00000000",
        "3a. low (EUR)": "57.64348800",
        "3b. low (USD)": "63.54000000",
        "4a. close (EUR)": "58.85006400",
        "4b. close (USD)": "64.87000000",
        "5. volume": "278618.16432000",
        "6. market cap (USD)": "278618.16432000"
      },
      "2019-09-05": {
        "1a. open (EUR)": "60.80054400",
        "1b. open (USD)": "67.02000000",
        "2a. high (EUR)": "61.13620800",
        "2b. high (USD)": "67.39000000",
        "3a. low (EUR)": "58.18780800",
        "3b. low (USD)": "64.14000000",
        "4a. close (EUR)": "59.17665600",
        "4b. close (USD)": "65.23000000",
        "5. volume": "166569.36182000",
        "6. market cap (USD)": "166569.36182000"
      },
      "2019-09-04": {
        "1a. open (EUR)": "62.59680000",
        "1b. open (USD)": "69.00000000",
        "2a. high (EUR)": "62.81452800",
        "2b. high (USD)": "69.24000000",
        "3a. low (EUR)": "60.23808000",
        "3b. low (USD)": "66.40000000",
        "4a. close (EUR)": "60.79147200",
        "4b. close (USD)": "67.01000000",
        "5. volume": "219846.13540000",
        "6. market cap (USD)": "219846.13540000"
      },
      "2019-09-03": {
        "1a. open (EUR)": "60.70982400",
        "1b. open (USD)": "66.92000000",
        "2a. high (EUR)": "64.41120000",
        "2b. high (USD)": "71.00000000",
        "3a. low (EUR)": "60.30158400",
        "3b. low (USD)": "66.47000000",
        "4a. close (EUR)": "62.65123200",
        "4b. close (USD)": "69.06000000",
        "5. volume": "286130.47957000",
        "6. market cap (USD)": "286130.47957000"
      },
      "2019-09-02": {
        "1a. open (EUR)": "59.73912000",
        "1b. open (USD)": "65.85000000",
        "2a. high (EUR)": "61.71681600",
        "2b. high (USD)": "68.03000000",
        "3a. low (EUR)": "58.78656000",
        "3b. low (USD)": "64.80000000",
        "4a. close (EUR)": "60.70982400",
        "4b. close (USD)": "66.92000000",
        "5. volume": "210648.66087000",
        "6. market cap (USD)": "210648.66087000"
      },
      "2019-09-01": {
        "1a. open (EUR)": "58.26945600",
        "1b. open (USD)": "64.23000000",
        "2a. high (EUR)": "60.97291200",
        "2b. high (USD)": "67.21000000",
        "3a. low (EUR)": "57.82492800",
        "3b. low (USD)": "63.74000000",
        "4a. close (EUR)": "59.77540800",
        "4b. close (USD)": "65.89000000",
        "5. volume": "160452.85757000",
        "6. market cap (USD)": "160452.85757000"
      },
      "2019-08-31": {
        "1a. open (EUR)": "58.22409600",
        "1b. open (USD)": "64.18000000",
        "2a. high (EUR)": "59.32180800",
        "2b. high (USD)": "65.39000000",
        "3a. low (EUR)": "56.47320000",
        "3b. low (USD)": "62.25000000",
        "4a. close (EUR)": "58.27852800",
        "4b. close (USD)": "64.24000000",
        "5. volume": "148167.15877000",
        "6. market cap (USD)": "148167.15877000"
      },
      "2019-08-30": {
        "1a. open (EUR)": "57.65256000",
        "1b. open (USD)": "63.55000000",
        "2a. high (EUR)": "59.51232000",
        "2b. high (USD)": "65.60000000",
        "3a. low (EUR)": "56.39155200",
        "3b. low (USD)": "62.16000000",
        "4a. close (EUR)": "58.21502400",
        "4b. close (USD)": "64.17000000",
        "5. volume": "188503.14428000",
        "6. market cap (USD)": "188503.14428000"
      },
      "2019-08-29": {
        "1a. open (EUR)": "60.53745600",
        "1b. open (USD)": "66.73000000",
        "2a. high (EUR)": "60.57374400",
        "2b. high (USD)": "66.77000000",
        "3a. low (EUR)": "56.24640000",
        "3b. low (USD)": "62.00000000",
        "4a. close (EUR)": "57.68884800",
        "4b. close (USD)": "63.59000000",
        "5. volume": "206167.47861000",
        "6. market cap (USD)": "206167.47861000"
      },
      "2019-08-28": {
        "1a. open (EUR)": "66.11673600",
        "1b. open (USD)": "72.88000000",
        "2a. high (EUR)": "66.35260800",
        "2b. high (USD)": "73.14000000",
        "3a. low (EUR)": "58.96800000",
        "3b. low (USD)": "65.00000000",
        "4a. close (EUR)": "60.53745600",
        "4b. close (USD)": "66.73000000",
        "5. volume": "295837.67734000",
        "6. market cap (USD)": "295837.67734000"
      }
    }
  };
}
function getCardanoInfo() {
  /*  return fetch(`${URL_ROOT}&symbol=ADA&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json()); */
  return {
    "Meta Data": {
      "1. Information": "Daily Prices and Volumes for Digital Currency",
      "2. Digital Currency Code": "ADA",
      "3. Digital Currency Name": "Cardano",
      "4. Market Code": "EUR",
      "5. Market Name": "Euro",
      "6. Last Refreshed": "2019-09-09 00:00:00",
      "7. Time Zone": "UTC"
    },
    "Time Series (Digital Currency Daily)": {
      "2019-09-09": {
        "1a. open (EUR)": "0.04226693",
        "1b. open (USD)": "0.04657000",
        "2a. high (EUR)": "0.04234862",
        "2b. high (USD)": "0.04666000",
        "3a. low (EUR)": "0.04215802",
        "3b. low (USD)": "0.04645000",
        "4a. close (EUR)": "0.04219432",
        "4b. close (USD)": "0.04649000",
        "5. volume": "1568403.20000000",
        "6. market cap (USD)": "1568403.20000000"
      },
      "2019-09-08": {
        "1a. open (EUR)": "0.04174052",
        "1b. open (USD)": "0.04599000",
        "2a. high (EUR)": "0.04311100",
        "2b. high (USD)": "0.04750000",
        "3a. low (EUR)": "0.04165884",
        "3b. low (USD)": "0.04590000",
        "4a. close (EUR)": "0.04226693",
        "4b. close (USD)": "0.04657000",
        "5. volume": "85615820.09999999",
        "6. market cap (USD)": "85615820.09999999"
      },
      "2019-09-07": {
        "1a. open (EUR)": "0.04013407",
        "1b. open (USD)": "0.04422000",
        "2a. high (EUR)": "0.04228508",
        "2b. high (USD)": "0.04659000",
        "3a. low (EUR)": "0.03960766",
        "3b. low (USD)": "0.04364000",
        "4a. close (EUR)": "0.04172237",
        "4b. close (USD)": "0.04597000",
        "5. volume": "83548291.80000000",
        "6. market cap (USD)": "83548291.80000000"
      },
      "2019-09-06": {
        "1a. open (EUR)": "0.04028836",
        "1b. open (USD)": "0.04439000",
        "2a. high (EUR)": "0.04056972",
        "2b. high (USD)": "0.04470000",
        "3a. low (EUR)": "0.03938984",
        "3b. low (USD)": "0.04340000",
        "4a. close (EUR)": "0.04014315",
        "4b. close (USD)": "0.04423000",
        "5. volume": "98700688.40000001",
        "6. market cap (USD)": "98700688.40000001"
      },
      "2019-09-05": {
        "1a. open (EUR)": "0.04123227",
        "1b. open (USD)": "0.04543000",
        "2a. high (EUR)": "0.04123227",
        "2b. high (USD)": "0.04543000",
        "3a. low (EUR)": "0.03967120",
        "3b. low (USD)": "0.04371000",
        "4a. close (EUR)": "0.04029744",
        "4b. close (USD)": "0.04440000",
        "5. volume": "57847202.80000000",
        "6. market cap (USD)": "57847202.80000000"
      },
      "2019-09-04": {
        "1a. open (EUR)": "0.04235769",
        "1b. open (USD)": "0.04667000",
        "2a. high (EUR)": "0.04236677",
        "2b. high (USD)": "0.04668000",
        "3a. low (EUR)": "0.04085108",
        "3b. low (USD)": "0.04501000",
        "4a. close (EUR)": "0.04123227",
        "4b. close (USD)": "0.04543000",
        "5. volume": "58244960.70000000",
        "6. market cap (USD)": "58244960.70000000"
      },
      "2019-09-03": {
        "1a. open (EUR)": "0.04108705",
        "1b. open (USD)": "0.04527000",
        "2a. high (EUR)": "0.04305654",
        "2b. high (USD)": "0.04744000",
        "3a. low (EUR)": "0.04035190",
        "3b. low (USD)": "0.04446000",
        "4a. close (EUR)": "0.04235769",
        "4b. close (USD)": "0.04667000",
        "5. volume": "120798363.40000001",
        "6. market cap (USD)": "120798363.40000001"
      },
      "2019-09-02": {
        "1a. open (EUR)": "0.04013407",
        "1b. open (USD)": "0.04422000",
        "2a. high (EUR)": "0.04198558",
        "2b. high (USD)": "0.04626000",
        "3a. low (EUR)": "0.03923555",
        "3b. low (USD)": "0.04323000",
        "4a. close (EUR)": "0.04112336",
        "4b. close (USD)": "0.04531000",
        "5. volume": "74053948.50000000",
        "6. market cap (USD)": "74053948.50000000"
      },
      "2019-09-01": {
        "1a. open (EUR)": "0.04058787",
        "1b. open (USD)": "0.04472000",
        "2a. high (EUR)": "0.04101444",
        "2b. high (USD)": "0.04519000",
        "3a. low (EUR)": "0.03948060",
        "3b. low (USD)": "0.04350000",
        "4a. close (EUR)": "0.04016130",
        "4b. close (USD)": "0.04425000",
        "5. volume": "33442001.80000000",
        "6. market cap (USD)": "33442001.80000000"
      },
      "2019-08-31": {
        "1a. open (EUR)": "0.04058787",
        "1b. open (USD)": "0.04472000",
        "2a. high (EUR)": "0.04125950",
        "2b. high (USD)": "0.04546000",
        "3a. low (EUR)": "0.03963489",
        "3b. low (USD)": "0.04367000",
        "4a. close (EUR)": "0.04059695",
        "4b. close (USD)": "0.04473000",
        "5. volume": "38370426.40000000",
        "6. market cap (USD)": "38370426.40000000"
      },
      "2019-08-30": {
        "1a. open (EUR)": "0.04038820",
        "1b. open (USD)": "0.04450000",
        "2a. high (EUR)": "0.04154993",
        "2b. high (USD)": "0.04578000",
        "3a. low (EUR)": "0.03990717",
        "3b. low (USD)": "0.04397000",
        "4a. close (EUR)": "0.04060602",
        "4b. close (USD)": "0.04474000",
        "5. volume": "46699729.70000000",
        "6. market cap (USD)": "46699729.70000000"
      },
      "2019-08-29": {
        "1a. open (EUR)": "0.04163161",
        "1b. open (USD)": "0.04587000",
        "2a. high (EUR)": "0.04163161",
        "2b. high (USD)": "0.04587000",
        "3a. low (EUR)": "0.03913571",
        "3b. low (USD)": "0.04312000",
        "4a. close (EUR)": "0.04038820",
        "4b. close (USD)": "0.04450000",
        "5. volume": "89451625.70000000",
        "6. market cap (USD)": "89451625.70000000"
      },
      "2019-08-28": {
        "1a. open (EUR)": "0.04527109",
        "1b. open (USD)": "0.04988000",
        "2a. high (EUR)": "0.04575212",
        "2b. high (USD)": "0.05041000",
        "3a. low (EUR)": "0.04091461",
        "3b. low (USD)": "0.04508000",
        "4a. close (EUR)": "0.04163161",
        "4b. close (USD)": "0.04587000",
        "5. volume": "97100872.00000000",
        "6. market cap (USD)": "97100872.00000000"
      },
      "2019-08-27": {
        "1a. open (EUR)": "0.04505326",
        "1b. open (USD)": "0.04964000",
        "2a. high (EUR)": "0.04537092",
        "2b. high (USD)": "0.04999000",
        "3a. low (EUR)": "0.04366464",
        "3b. low (USD)": "0.04811000",
        "4a. close (EUR)": "0.04527109",
        "4b. close (USD)": "0.04988000",
        "5. volume": "41102635.80000000",
        "6. market cap (USD)": "41102635.80000000"
      },
      "2019-08-26": {
        "1a. open (EUR)": "0.04491712",
        "1b. open (USD)": "0.04949000",
        "2a. high (EUR)": "0.04612423",
        "2b. high (USD)": "0.05082000",
        "3a. low (EUR)": "0.04421827",
        "3b. low (USD)": "0.04872000",
        "4a. close (EUR)": "0.04505326",
        "4b. close (USD)": "0.04964000",
        "5. volume": "91817760.70000000",
        "6. market cap (USD)": "91817760.70000000"
      },
      "2019-08-25": {
        "1a. open (EUR)": "0.04553429",
        "1b. open (USD)": "0.05017000",
        "2a. high (EUR)": "0.04778514",
        "2b. high (USD)": "0.05265000",
        "3a. low (EUR)": "0.04392784",
        "3b. low (USD)": "0.04840000",
        "4a. close (EUR)": "0.04491712",
        "4b. close (USD)": "0.04949000",
        "5. volume": "135714785.80000001",
        "6. market cap (USD)": "135714785.80000001"
      },
      "2019-08-24": {
        "1a. open (EUR)": "0.04507142",
        "1b. open (USD)": "0.04966000",
        "2a. high (EUR)": "0.04674140",
        "2b. high (USD)": "0.05150000",
        "3a. low (EUR)": "0.04364648",
        "3b. low (USD)": "0.04809000",
        "4a. close (EUR)": "0.04552522",
        "4b. close (USD)": "0.05016000",
        "5. volume": "94896456.20000000",
        "6. market cap (USD)": "94896456.20000000"
      }
    }
  };
}
function getMoneroInfo() {
  /*  return fetch(`${URL_ROOT}&symbol=XMR&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json()); */
  return {
    "Meta Data": {
      "1. Information": "Daily Prices and Volumes for Digital Currency",
      "2. Digital Currency Code": "XMR",
      "3. Digital Currency Name": "Monero",
      "4. Market Code": "EUR",
      "5. Market Name": "Euro",
      "6. Last Refreshed": "2019-09-09 00:00:00",
      "7. Time Zone": "UTC"
    },
    "Time Series (Digital Currency Daily)": {
      "2019-09-09": {
        "1a. open (EUR)": "69.91242800",
        "1b. open (USD)": "77.03000000",
        "2a. high (EUR)": "69.95780800",
        "2b. high (USD)": "77.08000000",
        "3a. low (EUR)": "69.73090800",
        "3b. low (USD)": "76.83000000",
        "4a. close (EUR)": "69.74906000",
        "4b. close (USD)": "76.85000000",
        "5. volume": "234.77632000",
        "6. market cap (USD)": "234.77632000"
      },
      "2019-09-08": {
        "1a. open (EUR)": "70.76557200",
        "1b. open (USD)": "77.97000000",
        "2a. high (EUR)": "71.68224800",
        "2b. high (USD)": "78.98000000",
        "3a. low (EUR)": "68.56918000",
        "3b. low (USD)": "75.55000000",
        "4a. close (EUR)": "70.02134000",
        "4b. close (USD)": "77.15000000",
        "5. volume": "4943.06239000",
        "6. market cap (USD)": "4943.06239000"
      },
      "2019-09-07": {
        "1a. open (EUR)": "68.08815200",
        "1b. open (USD)": "75.02000000",
        "2a. high (EUR)": "71.32828400",
        "2b. high (USD)": "78.59000000",
        "3a. low (EUR)": "66.96272800",
        "3b. low (USD)": "73.78000000",
        "4a. close (EUR)": "70.79280000",
        "4b. close (USD)": "78.00000000",
        "5. volume": "4684.55932000",
        "6. market cap (USD)": "4684.55932000"
      },
      "2019-09-06": {
        "1a. open (EUR)": "69.04113200",
        "1b. open (USD)": "76.07000000",
        "2a. high (EUR)": "72.34479600",
        "2b. high (USD)": "79.71000000",
        "3a. low (EUR)": "67.91570800",
        "3b. low (USD)": "74.83000000",
        "4a. close (EUR)": "68.26967200",
        "4b. close (USD)": "75.22000000",
        "5. volume": "9994.84598000",
        "6. market cap (USD)": "9994.84598000"
      },
      "2019-09-05": {
        "1a. open (EUR)": "67.14424800",
        "1b. open (USD)": "73.98000000",
        "2a. high (EUR)": "70.79280000",
        "2b. high (USD)": "78.00000000",
        "3a. low (EUR)": "66.72675200",
        "3b. low (USD)": "73.52000000",
        "4a. close (EUR)": "68.95037200",
        "4b. close (USD)": "75.97000000",
        "5. volume": "11876.04647000",
        "6. market cap (USD)": "11876.04647000"
      },
      "2019-09-04": {
        "1a. open (EUR)": "67.87032800",
        "1b. open (USD)": "74.78000000",
        "2a. high (EUR)": "68.07907600",
        "2b. high (USD)": "75.01000000",
        "3a. low (EUR)": "64.81171600",
        "3b. low (USD)": "71.41000000",
        "4a. close (EUR)": "66.97180400",
        "4b. close (USD)": "73.79000000",
        "5. volume": "8002.09041000",
        "6. market cap (USD)": "8002.09041000"
      },
      "2019-09-03": {
        "1a. open (EUR)": "66.48170000",
        "1b. open (USD)": "73.25000000",
        "2a. high (EUR)": "68.75070000",
        "2b. high (USD)": "75.75000000",
        "3a. low (EUR)": "66.13681200",
        "3b. low (USD)": "72.87000000",
        "4a. close (EUR)": "67.87032800",
        "4b. close (USD)": "74.78000000",
        "5. volume": "10246.19674000",
        "6. market cap (USD)": "10246.19674000"
      },
      "2019-09-02": {
        "1a. open (EUR)": "64.73003200",
        "1b. open (USD)": "71.32000000",
        "2a. high (EUR)": "67.21685600",
        "2b. high (USD)": "74.06000000",
        "3a. low (EUR)": "63.23249200",
        "3b. low (USD)": "69.67000000",
        "4a. close (EUR)": "66.30018000",
        "4b. close (USD)": "73.05000000",
        "5. volume": "11150.06436000",
        "6. market cap (USD)": "11150.06436000"
      },
      "2019-09-01": {
        "1a. open (EUR)": "61.09055600",
        "1b. open (USD)": "67.31000000",
        "2a. high (EUR)": "67.71603600",
        "2b. high (USD)": "74.61000000",
        "3a. low (EUR)": "60.47338800",
        "3b. low (USD)": "66.63000000",
        "4a. close (EUR)": "64.74818400",
        "4b. close (USD)": "71.34000000",
        "5. volume": "6897.75312000",
        "6. market cap (USD)": "6897.75312000"
      },
      "2019-08-31": {
        "1a. open (EUR)": "61.58066000",
        "1b. open (USD)": "67.85000000",
        "2a. high (EUR)": "62.02538400",
        "2b. high (USD)": "68.34000000",
        "3a. low (EUR)": "59.96513200",
        "3b. low (USD)": "66.07000000",
        "4a. close (EUR)": "61.11778400",
        "4b. close (USD)": "67.34000000",
        "5. volume": "3275.36729000",
        "6. market cap (USD)": "3275.36729000"
      },
      "2019-08-30": {
        "1a. open (EUR)": "60.71844000",
        "1b. open (USD)": "66.90000000",
        "2a. high (EUR)": "62.00723200",
        "2b. high (USD)": "68.32000000",
        "3a. low (EUR)": "59.62932000",
        "3b. low (USD)": "65.70000000",
        "4a. close (EUR)": "61.55343200",
        "4b. close (USD)": "67.82000000",
        "5. volume": "6732.76183000",
        "6. market cap (USD)": "6732.76183000"
      },
      "2019-08-29": {
        "1a. open (EUR)": "65.43796000",
        "1b. open (USD)": "72.10000000",
        "2a. high (EUR)": "65.43796000",
        "2b. high (USD)": "72.10000000",
        "3a. low (EUR)": "60.54599600",
        "3b. low (USD)": "66.71000000",
        "4a. close (EUR)": "60.71844000",
        "4b. close (USD)": "66.90000000",
        "5. volume": "7727.18429000",
        "6. market cap (USD)": "7727.18429000"
      },
      "2019-08-28": {
        "1a. open (EUR)": "71.24660000",
        "1b. open (USD)": "78.50000000",
        "2a. high (EUR)": "72.39925200",
        "2b. high (USD)": "79.77000000",
        "3a. low (EUR)": "64.81171600",
        "3b. low (USD)": "71.41000000",
        "4a. close (EUR)": "65.43796000",
        "4b. close (USD)": "72.10000000",
        "5. volume": "9797.75944000",
        "6. market cap (USD)": "9797.75944000"
      },
      "2019-08-27": {
        "1a. open (EUR)": "72.33572000",
        "1b. open (USD)": "79.70000000",
        "2a. high (EUR)": "72.68060800",
        "2b. high (USD)": "80.08000000",
        "3a. low (EUR)": "70.39345600",
        "3b. low (USD)": "77.56000000",
        "4a. close (EUR)": "71.24660000",
        "4b. close (USD)": "78.50000000",
        "5. volume": "4241.47133000",
        "6. market cap (USD)": "4241.47133000"
      },
      "2019-08-26": {
        "1a. open (EUR)": "73.28870000",
        "1b. open (USD)": "80.75000000",
        "2a. high (EUR)": "76.15671600",
        "2b. high (USD)": "83.91000000",
        "3a. low (EUR)": "71.73670400",
        "3b. low (USD)": "79.04000000",
        "4a. close (EUR)": "72.38110000",
        "4b. close (USD)": "79.75000000",
        "5. volume": "5254.40179000",
        "6. market cap (USD)": "5254.40179000"
      },
      "2019-08-25": {
        "1a. open (EUR)": "73.02549600",
        "1b. open (USD)": "80.46000000",
        "2a. high (EUR)": "74.72270800",
        "2b. high (USD)": "82.33000000",
        "3a. low (EUR)": "71.70040000",
        "3b. low (USD)": "79.00000000",
        "4a. close (EUR)": "73.15256000",
        "4b. close (USD)": "80.60000000",
        "5. volume": "4828.89092000",
        "6. market cap (USD)": "4828.89092000"
      },
      "2019-08-24": {
        "1a. open (EUR)": "74.49580800",
        "1b. open (USD)": "82.08000000",
        "2a. high (EUR)": "74.60472000",
        "2b. high (USD)": "82.20000000",
        "3a. low (EUR)": "70.84725600",
        "3b. low (USD)": "78.06000000",
        "4a. close (EUR)": "73.07995200",
        "4b. close (USD)": "80.52000000",
        "5. volume": "4830.64267000",
        "6. market cap (USD)": "4830.64267000"
      },
      "2019-08-23": {
        "1a. open (EUR)": "74.44135200",
        "1b. open (USD)": "82.02000000",
        "2a. high (EUR)": "75.78460000",
        "2b. high (USD)": "83.50000000",
        "3a. low (EUR)": "73.43391600",
        "3b. low (USD)": "80.91000000",
        "4a. close (EUR)": "74.49580800",
        "4b. close (USD)": "82.08000000",
        "5. volume": "4933.07119000",
        "6. market cap (USD)": "4933.07119000"
      },
      "2019-08-22": {
        "1a. open (EUR)": "73.51560000",
        "1b. open (USD)": "81.00000000",
        "2a. high (EUR)": "75.65753600",
        "2b. high (USD)": "83.36000000",
        "3a. low (EUR)": "70.99247200",
        "3b. low (USD)": "78.22000000",
        "4a. close (EUR)": "74.44135200",
        "4b. close (USD)": "82.02000000",
        "5. volume": "4453.88440000",
        "6. market cap (USD)": "4453.88440000"
      },
      "2019-08-21": {
        "1a. open (EUR)": "77.90838400",
        "1b. open (USD)": "85.84000000",
        "2a. high (EUR)": "78.51647600",
        "2b. high (USD)": "86.51000000",
        "3a. low (EUR)": "71.52795600",
        "3b. low (USD)": "78.81000000",
        "4a. close (EUR)": "73.37038400",
        "4b. close (USD)": "80.84000000",
        "5. volume": "7850.57487000",
        "6. market cap (USD)": "7850.57487000"
      },
      "2019-08-20": {
        "1a. open (EUR)": "81.23020000",
        "1b. open (USD)": "89.50000000",
        "2a. high (EUR)": "82.60975200",
        "2b. high (USD)": "91.02000000",
        "3a. low (EUR)": "76.49252800",
        "3b. low (USD)": "84.28000000",
        "4a. close (EUR)": "77.69963600",
        "4b. close (USD)": "85.61000000",
        "5. volume": "7415.67288000",
        "6. market cap (USD)": "7415.67288000"
      },
      "2019-08-19": {
        "1a. open (EUR)": "79.64190000",
        "1b. open (USD)": "87.75000000",
        "2a. high (EUR)": "82.84572800",
        "2b. high (USD)": "91.28000000",
        "3a. low (EUR)": "76.40176800",
        "3b. low (USD)": "84.18000000",
        "4a. close (EUR)": "81.06683200",
        "4b. close (USD)": "89.32000000",
        "5. volume": "7044.43488000",
        "6. market cap (USD)": "7044.43488000"
      }
    }
  };
}
/* function getBitcoinCashInfo() {
  return fetch(`${URL_ROOT}&symbol=BCH&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
} */
/* function getTetherInfo() {
  return fetch(`${URL_ROOT}&symbol=USDT&market=EUR&apikey=${API_KEY}`)
    .then(handleErrors)
    .then(res => res.json());
} */
function getImageUrl(cryptoCode) {
  switch (cryptoCode) {
    case "BTC":
      return "img/Bitcoin.png";
    case "ETH":
      return "img/Etherium.png";
    case "XRP":
      return "img/Ripple.png";
    case "BCH":
      return "img/cash.png";
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
    case "USDT":
      return "img/Tether.png";
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
    let eos = getEosInfo();
    let stellar = getStellarInfo();
    let litecoin = getLitecoinInfo();
    let cardano = getCardanoInfo();
    let monero = getMoneroInfo();
    //let bitcoinCash = getBitcoinCashInfo();
    let cryptos = [];
    Promise.all([
      bitcoin,
      ethereum,
      ripple,
      eos,
      stellar,
      litecoin,
      cardano,
      monero
    ])
      .then(json => {
        for (let crypto of json) {
          cryptos.push(getCryptoInfo(crypto));
        }
        dispatch(fetchCryptosSuccess(cryptos));
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
