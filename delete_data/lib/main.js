function findNum(str,val) {
    let num = str.split('->');
    let result = [];
    for(let item of num){
        if(item !== val.toString()){
            result.push(item);
        }
    }
    return result.join('->');

}

module.exports = findNum;