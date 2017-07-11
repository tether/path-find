
/**
 * Test dependencies.
 */

const test = require('tape')
const find = require('..')


test('should find closest path #1', assert => {
  assert.plan(1)
  const map = {
    '/user': '/user',
    '/user/name': '/user/name',
    '/user/name/bruno': '/user/name/bruno'
  }
  assert.equal(find('/user/name/olivier', map), '/user/name')
})


test('should find closest path #2', assert => {
  assert.plan(1)
  const map = {
    '/user': '/user',
    '/user/name': '/user/name',
    '/user/name/bruno': '/user/name/bruno'
  }
  assert.equal(find('/user/names/olivier', map), '/user')
})

test('should return falsy if path not found', assert => {
  assert.plan(1)
  const map = {
    '/user': '/user',
    '/user/name': '/user/name',
    '/user/name/bruno': '/user/name/bruno'
  }
  assert.equal(find('/users/names/olivier', map) == null, true)
})
