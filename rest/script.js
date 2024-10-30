function addition(...num){
    let sum = 0;
    for(let i = 0;i<num.length;i++){
        sum += num[i];
    }
    return sum;
}
console.log(addition(2,56,2,3,65,98,7))
console.log(addition(2,56,98,7))
console.log(addition(2,56,2,3,65))
