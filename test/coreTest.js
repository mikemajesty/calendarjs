var chai = require('chai');
var expect = chai.expect;
var Core = require('../src/core');

describe('Core', function() {

  it('getMonthDays() should return 1', function() {
    expect(new Date().getMonthDays()).to.equal(1);
  });
});