function getLeastPrimesLinear(n) {
  let leastPrimes = new Array(n + 1).fill(0);
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (leastPrimes[i] === 0) {
      leastPrimes[i] = i;
      primes.push(i);
    }

    for (let j = 0; j < primes.length; j++) {
      let x = primes[j] * i;
      if (primes[j] > leastPrimes[i] || x > n) {
        break;
      }
      leastPrimes[x] = primes[j];
    }
  }

  return [primes, leastPrimes];
}