function intersection(arr1,arr2){
    if(arr2.length>arr1.length){
        let temp = arr1;
        arr1 = arr2;
        arr2 = temp;
    }
    return arr1.filter(item=>arr2.includes(item));
}
module.exports = intersection;