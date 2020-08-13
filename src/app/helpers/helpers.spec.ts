import { randomNumber } from './helpers';

describe('helpers checkout', () => {

  it('check randomNumber with integer result', () => {
    const min = 100;
    const max = 2000;

    expect(randomNumber(min, max)).toBeGreaterThan(min);
    expect(randomNumber(min, max)).toBeLessThan(max);
    expect(Number.isInteger(randomNumber(min, max))).toBe(true);
  })

  it('check randomNumber with float number result', () => {
    const min = 100;
    const max = 2000;
    const float = 2;

    expect(randomNumber(min, max, float)).toBeGreaterThan(min);
    expect(randomNumber(min, max, float)).toBeLessThan(max);
    expect(Number.isInteger(randomNumber(min, max, float))).not.toBe(true);
  })

})
