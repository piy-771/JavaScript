let x;


x = Math.random()*10;

function randomnum(min,max){
    return  Math.floor(Math.random() * (max - min + 1) + min);
}

let result = randomnum(80,120)


const array = ['BMW','Ford','Kia','Tata','Suzuki','Toyoto']
console.log(array)
console.log(array[3])
console.log(array.at(3))
const newarray = array.push("maruti")   //it return length of new array
array.pop();
array.shift();
array.unshift("nano")

console.log(array)
document.getElementById("demo").innerHTML = array;

//unshift and push methods of array return the length of updated array
//push and unshift add new element in an array from end and at start respectively

//pop and shift method returns the value that is deleted


//array to string convert
const stringArray = array.toString();
console.log(stringArray)

//we can also seperate with anything    
const myArray = array.join("*");
console.log(myArray);


