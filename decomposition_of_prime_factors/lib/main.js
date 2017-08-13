function main(num) {
    let result = [];
    for (let i = 2; i <= num; i++) {
        while (num !== i) {
            if (num % i === 0) {
                result.push(i);
                num = num / i;
            } else
                break;
        }
    }
    result.push(num);
    let str = result.join(' ');
    console.log(str);
    return str;
}

module.exports = main;