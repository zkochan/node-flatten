var flatten = require('.');

console.log(flatten([1, [2, 3], [4, 5, 6], [7, [8, 9]], 10]))

console.log(flatten([1, [2, [3, [4, [5]]]]], 2))
