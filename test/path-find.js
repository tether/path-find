
/**
 * Test dependencies.
 */

const test = require('tape')
const find = require('..')


test('should find perfect match', assert => {
  assert.plan(1)
  const map = {
    '/user/': '/user',
    '/user/name/': '/user/name',
    '/user/name/bruno/': '/user/name/bruno'
  }
  assert.equal(find('/user/name/bruno/', map), '/user/name/bruno')
})

test('should find closest path #1', assert => {
  assert.plan(1)
  const map = {
    '/user/': '/user',
    '/user/name/': '/user/name',
    '/user/name/bruno/': '/user/name/bruno'
  }
  assert.equal(find('/user/name/olivier/', map), '/user/name')
})


test('should find closest path #2', assert => {
  assert.plan(1)
  const map = {
    '/user/': '/user',
    '/user/name/': '/user/name',
    '/user/name/bruno/': '/user/name/bruno'
  }
  assert.equal(find('/user/names/olivier/', map), '/user')
})


test('should return falsy if path not found', assert => {
  assert.plan(1)
  const map = {
    '/use/': '/user',
    '/user/name/': '/user/name',
    '/user/name/bruno/': '/user/name/bruno'
  }
  assert.equal(find('/users/names/olivier/', map) == null, true)
})


test('should normalize path', assert => {
  assert.plan(2)
  const map = {
    '/user/': '/user',
    '/user/name/': '/user/name',
    '/user/name/bruno/': '/user/name/bruno'
  }
  assert.equal(find('/user/names/olivier/', map), '/user')
  assert.equal(find('/user/name/olivier/', map), '/user/name')
})
