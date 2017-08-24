var intersection = require('./intersection.js');

describe('数组求交集测试', function() {
    it('[1,2,2,1]与[2,2]', function() {
        let result = intersection([1,2,2,1],[2,2]);
        let arr = [2,2];
        expect(result).toEqual(arr);
    });
});