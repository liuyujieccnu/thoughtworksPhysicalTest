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

    it("1->2->3->3->4->5->3 删除链表数据", function(){
        let result = main('1->2->3->3->4->5->3',3);
        let expect_string = '1->2->4->5';
        console.log(`删除相关数据之后的链表为${main('1->2->3->3->4->5->3',3)}`);
        expect(expect_string).to.equal(result);
    });
});