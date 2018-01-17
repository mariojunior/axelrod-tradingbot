const proxyquire = require("proxyquire-2");
const assert = require("chai").assert;
const expect = require("chai").expect;
const arbitrage = require('../core/arbitrage');


describe('Arbitrage Engine Tests', () => {

    it('Should return a valid instance', () => {
      assert.isNotNull(arbitrage);
    });
});