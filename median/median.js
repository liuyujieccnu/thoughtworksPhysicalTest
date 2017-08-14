function median(arr){
    let res=0;
    arr.sort((a,b)=>a-b);
    if(arr.length%2===0){
        res=(arr[arr.length/2]+arr[arr.length/2-1])/2;
    }else{
        res=arr[Math.floor(arr.length/2)];
    }
    console.log(res);
    return res;
}

module.exports = median;

// main([1,5,3]);
// main([1,9,8,4,3,2,1]);
// main([1,9,8,4,3,3,4,6,7,2,1]);