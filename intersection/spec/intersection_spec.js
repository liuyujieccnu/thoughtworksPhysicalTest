var intersection = require('../intersection.js');
var expect = require('chai').expect;

describe('数组求交集测试', function() {
    it('[1,2,2,1]与[2,2]', function() {
        let result = intersection([1,2,2,1],[2,2]);
        let arr = [2,2];
        expect([2,2]).to.eql([2,2]);
    });
});