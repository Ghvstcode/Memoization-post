const fp = require("lodash/fp");

function power(a, b) {
  return Math.pow(a + b, b);
}

// console.log("1", power(240, 120));
// console.log("2", power(140, 100));
// console.log("3", power(240, 120));
// console.log("4", power(140, 100));

const memoizedPower = fp.memoize(power);
console.log("1", memoizedpower(240, 120)); //This Call is computed & cached
console.log("2", memoizedpower(140, 100)); //This Call is computed & cached
console.log("3", memoizedpower(240, 120)); //The result is returned from cache
console.log("4", memoizedpower(140, 100)); //The result is returned from cache
console.log("3", memoizedpower(240, 120)); //The result is returned from cache
console.log("4", memoizedpower(140, 100)); //The result is returned from cache
