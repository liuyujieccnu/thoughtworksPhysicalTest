
const square= require('./square.js');

describe("square",function(){
    it("test", function() {
        let arr =  [5, 3, 7, 1];
        let result = [25, 9, 49, 1];
        console.log(square(arr));
        expect(square(arr)).toEqual(result);
      });
});