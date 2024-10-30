//Q1. How to check if an object is an array or not? Provide some code. 		
let sr = [2,5,"Piyush",52.01,'s'];
let obj = { name : "piyush", age : 24, occupation : "Freasher"}

console.log(Array.isArray(sr));
console.log(Array.isArray(obj));

// Q2. Write the JavaScript code to change the content and colour of the HTML element below when we click button?
//        <h1 id="demo">May the code be with you. </h1>  

document.getElementById('btn').addEventListener("click",change)

function change(){
    document.getElementById('demo').innerHTML = "Its not with you"
    document.getElementById('demo').style.cssText = "background-color : red;color : pink"
}

// Q3. Write a function that takes the base and height of a triangle and return its area.


function areaOfTriangle(){
    let base = parseInt(prompt("Enter base of the triangle"))
    let height = parseInt(prompt("Enter height of the triangle"))
    return 1/2*base*height

}

//console.log(areaOfTriangle())

// Q4. Write a JavaScript program to find the maximum number in an array.
let arr= [25,36,25,52,89,41,36];
let max = arr[0];

for(let i = 1;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i];
    }
    
}
//document.write("max number = " + max)

// Q5. Write a JavaScript function that reverses a number.				   6
// Example x = 32243;
// Expected Output: 34223

//let number = parseInt(prompt("Enter a number"));
function reverse(number){
    let reverse = 0;
    while(number != 0){
        let digit = number%10;
        reverse = reverse *10 + digit;
        number = Math.trunc(number /10);

    }

    return reverse;
    
}

//console.log(reverse(number));

// Q6. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  		 



document.getElementById('btn1').addEventListener('click',Multiply)
document.getElementById('btn2').addEventListener('click',Divide);

function Multiply(){
    //let mul = Number1 * Number2;
    let Number1 = document.getElementById("1stnumber").value
    let Number2 = document.getElementById("2ndnumber").value
    document.getElementById('para').innerHTML = Number2 * Number1;
    return false;
}
function Divide(){
    let Number1 = document.getElementById("1stnumber").value
    let Number2 = document.getElementById("2ndnumber").value
    document.getElementById('para').innerHTML = Number1/Number2;
    return false;
}

// Q7. Write a JavaScript program to display the current day and time in the following format.										6
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
// let date = new Date();
// console.log("Today is " + date.toDateString())
// console.log("Current time is " + date.toLocaleTimeString());

// Q8. Write a Java Script Program to create 10-character random password generator. 
function randomPasswordGenerator(length){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%^&*()_+?.,"
    let password = '';
    for(let i = 0;i<length;i++){
        let randomIndex = Math.floor(Math.random()) * characters.length+1;
        password += characters[randomIndex];
    }
    return password;
}

console.log(randomPasswordGenerator(10));

// Q9. How to check if an object is a string or not? Provide some code. 	

let str = "piyush";
let obj1 = {
    name:"piyush",
    age :23,
    salary :"8lpa"
}

if(typeof(obj1) === 'string'){
    console.log("this is string");
}else {
    console.log("this is not a string");
}

// Q10. Write a JavaScript program to compute the sum and product of an array of integers.	
const ar = [2,36,5,1,25,0];
let sum = 0;
let product = 1;
for(let i = 0;i<sr.length;i++){
    sum += ar[i];
    product *= ar[i]; 
}

console.log("sum = " + sum)
console.log("product = " + product)

// Q11. Write a JavaScript program to calculate area of circle when the radius of the circle will be supplied by the user.

// let radius = parseInt(prompt("Enter radius of circle"));
// let area = 2 * Math.PI * radius;
// console.log("area of circle  = " +area)

// Q12. Write a JavaScript program to check the given number is positive or not.  

//let number1 = parseInt(prompt("Enter a number"))
// if(number1>0){
//     console.log("number is positive")
// }else if(number1 == 0){
//     console.log("number is neither positive nor null ")
// }else {
//     console.log("number is negative");
// }

// Q13. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms

function fibonacciSequence(number){
    let firstTerm = 0;
    let secondTerm = 1;
    console.log(0)
    console.log(1)
    for(let i = 0;i<number -2;i++){
        let nextTerm = firstTerm + secondTerm;
        console.log(nextTerm);
        firstTerm = secondTerm;
        secondTerm = nextTerm;

    }
}

console.log(fibonacciSequence(10))

// Q14. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign

// let num1 = parseInt(prompt("Enter 1st number"))
// let num2 = parseInt(prompt("Enter 2nd number"));
// let num3 = parseInt(prompt("Enter 3rd number"));
// let pro = num1 * num2 * num3;
// if(pro<0){
//     alert("-")
// }else if(pro == 0){
//     alert(null)
// }else{
//     alert("+")
// }


// Q16. Write a java script program using nested loop to print following pattern in console.											6
// 4   3   2   1
// 4   3   2
// 4   3
// 4

for(let  i = 0;i<4;i++){
    for(let j = 4;j>i;j--){
        document.write(j + " ");
    }
    document.write("<br>")
}


// Q19. Write a JavaScript function to capitalize the first letter of a string.	        4    
// Sample Input: cybrom technology bhopal
// Ans : Cybrom Technology Bhopal.	

function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}


// Q22. Write a JavaScript function to split a string and convert it into an array of words.											6
// Test Data:
// console.log(string_to_array("Cybrom Technology Bhopal"));
// Ans :      ["Cybrom", "Technology”, “Bhopal"]


console.log(capitalizeFirstLetterOfEachWord("cybrom technology bhopal"))
let str2 = "Cybrom Technology Bhopal";
console.log(str2.split(' '));

// Q25. Create an array object and Apply any six array methods in your program.  

let arr3 = [2,3,6,52,36,5]

console.log(arr3.slice(2,4));

console.log(arr3.pop())
console.log(arr3)


arr3.push(25);
console.log(arr3)

arr3.shift()
console.log(arr3)

arr3.unshift(256)
console.log(arr3)

console.log(arr3.map((t)=>{
    return t;
}))

let arr4 = arr3.filter((t)=>{
    return t%2 == 0;
})

console.log(arr4)

// Q26. Write a JavaScript function that changes the background colour of an element when a mouse enters it.

document.querySelector(".element").addEventListener('mouseenter',changecolor)

function changecolor(){
    document.querySelector(".element").style.backgroundColor = "red";
}

// Q27. Write a Java Script Program to create Counter Program using setInterval() method. 

let i = 1;
let p = document.getElementById("count").innerText

setInterval(display(), 1000);
function display(){
    p = i;
    i++;
    return 
}

 






