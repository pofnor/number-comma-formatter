import { assert } from 'chai';
import numeralCommaFormatter from '../index.js';

describe('Numeral Comma Formatter', () => {
  it('should format numbers with commas', () => {
    const result = numeralCommaFormatter('1525.25$');
    assert.strictEqual(result, '1,525.25');
  });

  it('should handle plain numbers', () => {
    const result = numeralCommaFormatter('9876543.21');
    assert.strictEqual(result, '9,876,543.21');
  });

  it('should handle strings with various formats', () => {
    const result = numeralCommaFormatter('1234567890.123abc');
    assert.strictEqual(result, '1,234,567,890.123');
  });

  it('should handle empty input', () => {
    const result = numeralCommaFormatter('');
    assert.strictEqual(result, '');
  });

  it('should handle null input', () => {
    const result = numeralCommaFormatter(null);
    assert.strictEqual(result, '');
  });
  
});
