function findNum(arr) {
    let count = [];
    for (let item of arr) {
        if (typeof (count[item]) === "undefined") {
            count[item]=1;
        }else{
            count[item]++;
        }
    }
    console.log(count);
    return count.indexOf(1);
}

module.exports = findNum;