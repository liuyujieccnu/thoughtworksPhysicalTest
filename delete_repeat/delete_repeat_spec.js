const delete_repeat= require('./delete_repeat.js');

describe("delete_repeat",function(){
    it("test", function() {
        let arr =  ['s', 'a', 's', 'b', 'a',1,'1',1];
        let result = ['s', 'a', 'b',1,'1'];
        console.log(delete_repeat(arr));
        expect(delete_repeat(arr)).toEqual(result);
      });
});