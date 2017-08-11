function diverge(obj) {
  const { a, ...otherProps } = obj
  return otherProps
}

module.exports = diverge
