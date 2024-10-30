function fun(){
    console.log(1);
}
console.log(2);
setTimeout(fun,2000);
console.log(3);

//Async Promise
async function display() {
    return 34;
    
}

console.log(display())


