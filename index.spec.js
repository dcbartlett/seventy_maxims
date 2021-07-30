const { expect } = require('@jest/globals');
const { getMaxim } = require('./index');

describe("Seventy Maxim", () => {
  it('should give a random maxim', () => {
    const maxim = getMaxim();
    expect(maxim).toBeDefined();
  })
  it('should give a random maxim', () => {
    const maxim = getMaxim(1);
    expect(maxim).toBeDefined();
    expect(maxim).toEqual('Pillage, then burn.');
  })
})