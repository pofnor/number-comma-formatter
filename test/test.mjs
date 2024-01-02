import { assert } from 'chai';
import numberCommaFormatter from '../index.js';

describe('number Comma Formatter', () => {
  it('should format numbers with commas', () => {
    const result = numberCommaFormatter('1525.25$');
    assert.strictEqual(result, '1,525.25');
  });

  it('should handle plain numbers', () => {
    const result = numberCommaFormatter('9876543.21');
    assert.strictEqual(result, '9,876,543.21');
  });

  it('should handle strings with various formats', () => {
    const result = numberCommaFormatter('1234567890.123abc');
    assert.strictEqual(result, '1,234,567,890.123');
  });

  it('should handle empty input', () => {
    const result = numberCommaFormatter('');
    assert.strictEqual(result, '');
  });

  it('should handle null input', () => {
    const result = numberCommaFormatter(null);
    assert.strictEqual(result, '');
  });
  
});
