//Q.1
//digital clock
setInterval(()=>{
    let date = new Date();
    let time = date.toLocaleTimeString()
    let dg = document.getElementById('digital_clock')
    dg.innerHTML = time;
},1000)

//-----------------------------------------------------------------------------------------------------------------------------------
//Q.2 random password generator
// function randomPasswordGenerator(lengthOfPassword){
//     let charString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsstuvwxyz!@#$%^&*_";
//     let password = "";
//     for(let i = 0;i<lengthOfPassword;i++){
//         let randomIndex = Math.floor(Math.random() * charString.length + 1)
//         password += charString[randomIndex];
//     }
//     return password;
// }

// console.log(randomPasswordGenerator(10))

//--------------------------------------------------------------------------------------------------------------------------------------------------------

//Q.4 image change
// let image = document.getElementById('img')

// document.getElementById('btn1').addEventListener('click',change)

// function change(){
//     image.src ="/free-photo-of-mother-toughing-baby.jpeg"
// }

// document.getElementById('btn2').addEventListener('click',change1)

// function change1(){
//     image.src = "/free-photo-of-hiker-with-a-backpack-looking-from-the-top-of-the-mountain.jpeg"
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------------

//Q.5 string to array
let array = "apple banana cherry"
let arrayToString = array.split(' ');
arrayToString.sort()

console.log(arrayToString)

//------------------------------------------------------------------------------------------------------------------------------------------

//Q6.array function 
let array1 = [1,5,6,8,9,25,6];

array1.push(5)
console.log(`Push = ${array1}`)


let last = array1.pop()
console.log(`pop = ${last}`)

array1.shift();
console.log(`shift = ${array1}`)

array1.unshift(25);
console.log(`unshift = ${array1}`);

console.log(`splice = ${array1.splice(2,3)}`)



