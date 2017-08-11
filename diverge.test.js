const diverge = require("./diverge")

describe("diverge", () => {
  test("should separate property `a` from an object", () => {
    expect(diverge({ a: 1, b: 2 })).toEqual({ b: 2 })
  })
})
