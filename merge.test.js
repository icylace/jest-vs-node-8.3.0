const merge = require("./merge")

describe("merge", () => {
  test("should merge two objects", () => {
    expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2})
  })
})
