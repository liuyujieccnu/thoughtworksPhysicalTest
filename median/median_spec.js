
const median= require('./median.js');

// import median from "./median.js";

describe("the_median",function(){
    it("test", function() {
        let arr = [9,8,4,2,1];
        let result = 4;
        expect(median(arr)).toEqual(result);
      });
});