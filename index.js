
/**
 * Find closest path in a URL-map object.
 *
 * @param {String}
 * @param {Object}
 * @return mapped value
 * @api public
 */

module.exports = function (url, map) {
  let result = map[url]
  let path = url.split('/')
  if (!result) {
    while (path.length) {
      path.pop()
      result = map[path.join('/')]
      if (result) return result
    }
  }
  return result
}
