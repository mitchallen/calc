"use strict";

var should = require('should'),
    modulePath = "../index";

describe('add method', () => {

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

    it('@SKIP should add a positive number', done => {
        let input = 5;
        var result = _calc.add(input);
        result.should.eql(input);
        done();
    });

    it('@DEBUG should add a negative number', done => {
        let input = -10;
        var result = _calc.add(input);
        result.should.eql(input);
        done();
    });

});
