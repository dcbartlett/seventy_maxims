const { expect } = require('@jest/globals');
const { getMaxim } = require('../lib/index');

describe("Seventy Maxim", () => {
  it('should give a random maxim', () => {
    const maxim = getMaxim();
    expect(maxim).toBeDefined();
  })
  it('should give a specific maxim', () => {
    const maxim = getMaxim(1);
    expect(maxim).toBeDefined();
    expect(maxim).toEqual('Pillage, then burn.');
  })
  it('should give a Maxim object if asked', () => {
    const maxim = getMaxim(1, true);
    expect(maxim).toBeDefined();
    expect(maxim).toHaveProperty("id");
    expect(maxim).toHaveProperty("content");
    expect(maxim.content).toBeDefined();
    expect(maxim.content).toEqual('Pillage, then burn.');
  })
})