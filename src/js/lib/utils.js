function isWildcard (value) {
  return value === '<any>' || value === '*'
}

module.exports = {
  isWildcard
}
