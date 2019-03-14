
module.exports = function makeExchange(currency) {
    let coinsSet = {};
  const coinsValue = [50, 25, 10, 5, 1];
  const coinsName = ['H', 'Q', 'D', 'N', 'P'];

  if ((currency > 0) && (currency <= 10000)) {
    for (let i = 0; i <= 4; i++) {
      let total = Math.floor(currency / coinsValue[i]);
      if (total !== 0) {
        coinsSet[coinsName[i]] = total;
        currency %= coinsValue[i];
      }
    }
  }

  if (currency > 10000) {
    coinsSet['error'] = 'You are rich, my friend! We don\'t have so much coins for exchange';
  }

  return coinsSet;
}
