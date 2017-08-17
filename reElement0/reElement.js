function reElement(arr){
    let map = new Map;
    let result = [];
    arr.forEach(value => {
        map.set(value, map.has(value) ? map.get(value) + 1 : 1);
    });
    for (let [key, value] of map) {
        if(value>1)
            result.push(key);
    }
    console.log(result.join(','));
    return result.join(',');
}
reElement(['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']);
module.exports = reElement;