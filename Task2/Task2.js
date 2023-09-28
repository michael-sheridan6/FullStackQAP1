
const _ = require("lodash");

// Returns an array with _.range(a,b) "a" being the starting value and "b" being the last value but not included
const nums = _.range(1, 10);
console.log(nums);

// Returns the array in groups of three in order
const chunks = _.chunk(nums, 3);
console.log(chunks);

// Returns the array group furthest to the right where _.takeRight(a,b) "a" is the array and "b" is the amount of elements you want to access
const right = _.takeRight(nums, 2);
console.log(right);