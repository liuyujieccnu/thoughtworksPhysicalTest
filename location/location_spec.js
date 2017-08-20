
const location= require('./location.js');

describe("location",function(){
    it("test", function() {
        let arr =  [1, 3, 7, 1 ,4,];
        let item = 1;
        let result = '0,3';
        console.log(location(arr,item));
        expect(location(arr,item)).toEqual(result);
      });
});