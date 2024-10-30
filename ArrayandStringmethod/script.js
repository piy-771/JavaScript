
// const array = ["BMW",'GTR','Audi','Mercedes','Maruti',"Nexon"]

// console.log(array)
// array.sort()
// console.log(array)

// array.reverse()

// const array1 = [25,65,55,36,41,25,100]     
// //array1.sort()                                //but it reads number as a string


// //ascending order
// array1.sort(function(a,b){                    //compare function ,it  sort number array in ascending order
//     return a-b;
// })
// console.log(array1)


// //decending order
// array1.sort(function(a,b){                    //compare function ,it  sort number array in ascending order
//     return b-a;
// })
// console.log(array1)

// document.getElementById('demo').innerHTML = array1



//Sring

let x = "john";
let city = "Bhopal"
//  x = "My name is \'John Doe\' and he is john doe\'s friend\\"



 //templete literals
 x = `Hello World I am ${x} from ${city}`
 console.log(x)
//  document.getElementById('demo').innerHTML = x

 let nam = "Piyush"
 let course = "Java Fullstack course"
 let city1 = "sagar";
 let age = 23;

 let info = `Hi My name is ${nam} , I am ${age} old , I am from ${city1} I am pursuring ${course} from cybrom`;
 let y = info.length
 console.log(y)
 document.getElementById('demo').innerHTML = info;

