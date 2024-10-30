// let image = document.getElementById('img')

// document.getElementById('btn1').addEventListener('click',change)

// function change(){
//     image.src ="/free-photo-of-mother-toughing-baby.jpeg"
// }

// document.getElementById('btn2').addEventListener('click',change1)

// function change1(){
//     image.src = "/free-photo-of-hiker-with-a-backpack-looking-from-the-top-of-the-mountain.jpeg"
// }

// function fibo(n){
//     if(n<=0){
//         return []
//     }else if(n==1){
//         return 0;

//     }
//     let fiboseries = [0,1]
//     for(let i =2;i<=n;i++){
//         let nextTerm = fiboseries[i-1]+fiboseries[i-2];
//         fiboseries.push(nextTerm)

//     }
//     return fiboseries;
// }

// console.log(fibo(10))

// const now = new Date();
// let weekDat = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// let day =weekDat[now.getDay()]
// let hour = now.getHours();
// let minute = now.getMinutes();
// let second = now.getSeconds();
// let amOrPm = hour<12 ? "AM":"PM";
// console.log(`Today is : ${day}`);
// console.log(`Current time is : ${hour} ${amOrPm} : ${minute} : ${second}`)
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getFullYear());


//capital
// function capitalizeFirstLetterOfAString(string){
//     return string.split(' ').map((word)=>{
//         return word[0].toUpperCase() + word.slice(1).toLowerCase()
//     }).join(' ')
// }

// console.log(capitalizeFirstLetterOfAString("my name is KaHAn Oisfasd nSDFFG"))

// function capitalizeFirstLetterOfEachWord(str) {
//     return str.split(' ').map((word) => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(' ');
// }

// console.log(capitalizeFirstLetterOfEachWord("cybrom technology bhobal"))
function blanlOrNot(str){
    if(str == ""){
        return "string is blank"
    }else{
        return "string is not blank"
    }
}

console.log(blanlOrNot(" "))

