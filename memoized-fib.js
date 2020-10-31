function fib(n, cache = {}) {
  if (cache[n]) {
    return cache[n];
  }

  if (n <= 1) {
    return 1;
  }

  return (cache[n] = fib(n - 1, cache) + fib(n - 2, cache));
}

console.log(fib(1000));
