function reElement(arr,item){
    return arr.reduce(( count, num ) => num == item ? count + 1 : count, 0);
}

module.exports = reElement;