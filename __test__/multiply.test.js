const multiply = require('../src/multiply');

test('adds 1 + 2 to equal 3', () => {
  expect(multiply(1, 2)).toBe(2);
});