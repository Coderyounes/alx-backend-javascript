const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when a is 1 and b is 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when a is 1 and b is 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when a is 1.2 and b is 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when a is 1.5 and b is 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when a is 0.1 and b is -0.1', () => {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });

  it('should return -4 when a is -1.5 and b is -2.5', () => {
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
  });

  it('should return 1 when a is 0.4 and b is 0.7', () => {
    assert.strictEqual(calculateNumber(0.4, 0.7), 1);
  });

  it('should return 5 when a is 1.66 and b is 2.66', () => {
    assert.strictEqual(calculateNumber(1.66666, 2.66666), 5);
  });
});
