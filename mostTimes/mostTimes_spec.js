const mostTimes= require('./mostTimes.js');

describe("mostTimes",function(){
    it("abcsbaddbizdbas", function() {
        let arr =  str = 'abcsbaddbizdbas';
        let result = '{b:4}';
        console.log(mostTimes(arr));
        expect(mostTimes(arr)).toEqual(result);
    });

    it("aaaaabbdbdbb", function() {
        let arr =  str = 'aaaaabbdbdbb';
        let result = '{a:5,b:5}';
        console.log(mostTimes(arr));
        expect(mostTimes(arr)).toEqual(result);
    });
});