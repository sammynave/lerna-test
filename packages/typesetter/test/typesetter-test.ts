import hello from 'typesetter';

QUnit.module('typesetter tests');

QUnit.test('hello', assert => {
  assert.equal(hello(), 'Hello from typesetter');
});
