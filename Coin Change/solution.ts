const getCoinChange = (coins: number[], amount:number, cacheCoins:{}):number =>{
  if(amount == 0) return 0;
  if(amount < 0) return -1;  
  if(cacheCoins[amount] !== undefined) return cacheCoins[amount];
  let minCoinCount = Number.MAX_SAFE_INTEGER;
  coins.map((c) => {
    const remainingAmount = amount - c;
    const coinCount = getCoinChange(coins, remainingAmount, cacheCoins);
    if (coinCount !== -1){
      minCoinCount = Math.min(minCoinCount, coinCount+1);
    }      
  });
  cacheCoins[amount] = minCoinCount === Number.MAX_SAFE_INTEGER ? -1: minCoinCount;
  return cacheCoins[amount];
}

function coinChange(coins: number[], amount: number): number {
  return getCoinChange(coins, amount, {});
}

console.log(coinChange([2], 3));
