function location(arr,item){
    let result=[];
    arr.map((num,index)=>{
        if(num===item)
            result.push(index);
    });
    return result.join(',');
}

module.exports = location;