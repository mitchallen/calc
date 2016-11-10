"use strict";

var should = require('should'),
    modulePath = "../index";

describe('value property', () => {

    var _factory = null;
    var _calc = null;

    before( done => {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _factory = require(modulePath);
        _calc = _factory.create();
        done();
    });

    beforeEach( done => {
        _calc.clear();
        done();
    });

    it('should return the value of the internal accumulator', done => {
        let input = 5;
        _calc.add(input);
        _calc.value().should.eql(input);
        done();
    });

    it('should return the value of two added numbers', done => {
        let i1 = 7, i2 = 3;
        _calc.add(i1);
        _calc.add(i2);
        _calc.value().should.eql(i1 + i2);
        done();
    });

});
