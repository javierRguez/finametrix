export default (cryptos, { text, sortBy }) => {
  return cryptos
    .filter(crypto => {
      const textMatch = crypto.name.toLowerCase().includes(text.toLowerCase());

      return textMatch;
    })
    .sort((crypto1, crypto2) => {
      if (sortBy === "marketCap") {
        return crypto1.marketCap > crypto2.marketCap ? -1 : 1;
      } else if (sortBy === "closePrice") {
        return crypto1.closePrice > crypto2.closePrice ? -1 : 1;
      } else if (sortBy === "volume") {
        return crypto1.volume > crypto2.volume ? -1 : 1;
      }
    });
};
