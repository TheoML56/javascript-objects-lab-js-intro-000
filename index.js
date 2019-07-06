var recipes = {}

function udpateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key] = value})
}
