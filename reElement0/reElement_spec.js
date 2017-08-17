
const reElement= require('./reElement.js');

// import median from "./median.js";

describe("reElement",function(){
    it("test", function() {
        let arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
        let result = 'a,ed';
        expect(reElement(arr)).toEqual(result);
      });
});