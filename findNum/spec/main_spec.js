"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("decomposition_of_prime_factors", function(){
    sinon.spy(console, 'log');

    it("[2,2,1,1,4,3,3]", function(){
        let result = main([2,2,1,1,4,3,3]);
        let expect_string = 4;
        console.log(`只出现一次的数为${main([2,2,1,1,4,3,3])}`);
        expect(expect_string).to.equal(result);
    });
});