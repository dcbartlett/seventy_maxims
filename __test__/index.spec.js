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
    const randomMaxim = getMaxim(true);
    expect(randomMaxim).toBeDefined();
    expect(randomMaxim).toHaveProperty("id");
    expect(randomMaxim).toHaveProperty("content");
    expect(randomMaxim.content).toBeDefined();
    const definedMaxim = getMaxim(1, true);
    expect(definedMaxim).toBeDefined();
    expect(definedMaxim).toHaveProperty("id");
    expect(definedMaxim).toHaveProperty("content");
    expect(definedMaxim.content).toBeDefined();
    expect(definedMaxim.content).toEqual('Pillage, then burn.');
  })
})