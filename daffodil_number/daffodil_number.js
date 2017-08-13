function main(){
    let arr = [];
    for(let i = 100;i<1000;i++){
        arr = i.toString().split('');
        let num = Math.pow(arr[0],3)+Math.pow(arr[1],3)+Math.pow(arr[2],3);
        if(num === i){
            console.log(i);
        }
    }
}

main();