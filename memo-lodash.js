var fp = require("lodash/fp");

function addo(a, b) {
  return Math.pow(a + b, b);
}
const add = fp.memoize(addo);
console.log("1", add(240, 120));
console.log("2", add(140, 100));
console.log("3", add(240, 120));
console.log("4", add(140, 100));
