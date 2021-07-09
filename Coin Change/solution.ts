const getSmallestCoin = (
  sortedCoins: number[],
  amount: number
): number | null => {
  let smallestCoin: number | null = null;
  sortedCoins.some((currentCoin) => {
    if (currentCoin <= amount) {
      smallestCoin = currentCoin;
      return true;
    }
    return false;
  });
  return smallestCoin;
};

const getCoinChange = (
  sortedCoins: number[],
  amount: number,
  countCoins: number
): number => {
  const smallestCoin = getSmallestCoin(sortedCoins, amount);
  if (smallestCoin === null) return -1;
  if (smallestCoin === amount) return 1;
  sortedCoins.map((c) => {
    const remainingAmount = amount - c;
    countCoins++;
    if (getCoinChange(sortedCoins, remainingAmount, countCoins) === -1)
      countCoins = -1;
  });
  return countCoins;
};

function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;
  const sortedCoins = coins.sort().reverse();
  return getCoinChange(sortedCoins, amount, 0);
}

console.log(coinChange([6, 5, 1], 16));
