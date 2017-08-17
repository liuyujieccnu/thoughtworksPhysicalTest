
const reElement= require('./reElement.js');

// import median from "./median.js";

describe("reElement",function(){
    it("test", function() {
        let arr = [1, 3, 7, 1 ,4,];
        let item = 1;
        let result = 2;
        expect(reElement(arr,item)).toEqual(result);
      });
});