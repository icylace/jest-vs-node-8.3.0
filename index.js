const merge = require("./merge")
const diverge = require("./diverge")

console.log(merge({ a: 1 }, { b: 2 }))
console.log(diverge({ a: 1, b: 2 }))
console.log("Yep, works!")
