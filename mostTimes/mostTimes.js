function mostTimes(str){
    let arr = str.split('');
    let resStr = '';
    let map = new Map();
    let resMap = new Map();
    arr.map(item=>{
        map.set(item,map.has(item)?map.get(item)+1:1);
    });
    let max = 0;
    for(let [key,value] of map){
        if(value>=max){
            max = value;
        }
    }
    for(let [key,value] of map){
        if(value===max){
            resMap.set(key,value);
        }
    }
    resStr = '{'+Array.from(resMap).map(item=>`${item[0]}:${item[1]}`).join(',')+'}';
    return resStr;
}

module.exports = mostTimes;