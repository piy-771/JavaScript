//const a = 5;
//const b = 6;
//const c = a+b;
//alert("sum = " = a )
//let a = 56;
//let b = 56;
//alert(a+b)
 //a = 26;
 //alert(a+b)
 //let a =5;
 //let b =52;
 //alert("a+b = ",a+b);
 //var n =5;
 //document.write("cube of n = ",n*n*n);
 //var a = parseInt(prompt("enter 1 number"));
 //var b = parseInt(prompt("enter 2 number"))
 //alert(a+b)
 //var a = parseInt(prompt("enter 1 number"));
 //alert(a*a);
 //var a = parseInt(prompt("enter 1 number"));
 //alert(a*a*a)
 //area of triangle
 //var l = parseInt(prompt("enter first side of triangle"));
 //var b = parseInt(prompt("enter base of triangle"));
// var h = parseInt(prompt("enter height of triangle"));
 //alert(b*h*1/2)
 //var a = parseInt(prompt("enter a number"));
// if(a>=0){
//    alert("Positive")
// }
// else{
//    alert("Negative")
// }
// var a = parseInt(prompt("enter a number"));
// if(a%2!=0){
//    alert("odd")
// }else{
//    alert("even")
// }
//var a = parseInt(prompt("enter a number"));
// if(a>0){
//    alert("Positive")
// }
// else if(a==0){
//    alert("nuteral")
// }
// else{
//    alert("Negative")
// }
//var amount = parseInt(prompt("enter a number"));
//if(amount>=100 && amount<=500){
//    alert("ten 5 star")
//}
//else if(amount>500 && amount<=1000){
//    alert("shopping")
//}
//else if(amount>1000 && amount<=10000){
//    alert("trip")
//}
//else{
//    alert("gareeb hu paise nhi h")
//}
//var a = parseInt(prompt("enter a number"));
//if(a%2!=0){
//        alert(a*a*a)
//     }else{
//        alert(a*a)
//     }
//var age = parseInt(prompt("enter age"));
//if(age>=18){
//var input  = parseInt(prompt("press 1 for indian"));
//if(input==1){
//   alert("eligable");
//}else{
//   alert("not eligable")
//}


   
//}else{
//   alert("pahle bade hoke aao")
//}
//var j = parseInt(prompt("enter number from 1 to 7"));
//switch(j){
//   case 1:
//      alert("Tanushree mam")
//      break;
//   case 2:
//      alert("asra mam")
 //     break;
//   case 3:/
//      alert("deepak sir")
//      break;
//   case 4:
//      alert("Gourav sir")
//      break;
//   case 5:
 //     alert("jaspreet mam")
//      break;
//   case 6:
//      alert("vikas sir")
//      break;
//   case 7:
//      alert("vaibhav sir")
//      break;
//   default:
//      alert("invalid number")         

//}
//calculator
/*var a = parseInt(prompt("enter first number"));
var b = parseInt(prompt("enter second number"));
var c= parseInt(prompt("enter 1 for addition , 2 for subtraction, 3 for multiplication , 4 for divide")); 
switch(c){
   case 1:
      alert(a+b);
      break;
   case 2:
      alert(a-b);
      break;
   
   case 3:
      alert(a*b);
      break;
   case 4:
      alert(a/b);
      break;
   default:
      alert("invalid choice");  
      
             
}*/

//loops

//do whike
/*let count = 1;
do{
   //console.log(count) 
   document.write(count+"<br>");
   
   count++;
   
}while(count<=10);*/

/*var a = parseInt(prompt("enter a number"));
var b =10;
do{
   console.log(b*a);
   b--;
}while(b>0);*/

//while loop
/*var i =1;
while(i<= 10){
   console.log(i);
   i++;
}
*/
//wap to print odd numbers between 1 to 20 using while loop
//var n = parseInt(prompt("Enter a number"));
/*var s =1;
while(s<=20){
   if(s%2 != 0){
      console.log(s);
   }
   s++;
}*/
//wap to print square of numbers between 15 to 1;
/*var s = 15;
while(s>=1){
   document.write(s*s + "<br>")
   //console.log(s*s);
   s--;
}*/
 

//for loop
//wap to print a table
/*var n = parseInt(prompt("Enter a number"));
for(let i =1;i<=10;i++){
   document.write(n "*", i "=",n*i);
}*/

//sum of digit of a number using for loop
/*var n = parseInt(prompt("Enter a number"));
var sum =0;

for(let i =0;n!=0;i++){
   let r = n%10;
   sum += r;
   n = parseInt(n/10);


}
console.log(sum);*/
 /*for(let i =0;i<5;i++){
   document.write("*");


}*/
/*for(let i =1;i<=5;i++){
   for(let j =1;j<=i;j++){
      document.write("*");
   }
   document.write("<br>")
}*/
// let a ='5';
// let b = "5";
// console.log(a===b)
/*let n =29
n>=29?console.log("greater"):console.log("smaller")*/
//wap to check number if even or odd
/*let a = parseInt(prompt("enter a number"))
a%2==0?console.log("Even"):console.log("odd");*/

//wap to check number is even or divisible by 3 or not.
// let a = parseInt(prompt("enter a number"))
// if(a%2 == 0 && a%3==0){
//    console.log("Even and divisible by 3");
// }else if(a%2==0){
//    console.log("Even")
// }else{
//    console.log("not")
// }

//wap to check number is neutral or not

// let b = parseInt(prompt("enter a number"))
// if(b==0){
//    console.log("neutral")
// }else{
//    console.log("not neutral")
// }

//wap to print only even numbers between 1-30
// for(let i =1;i<=30;i++){
//    if(i%2==0){
//       console.log(i);
//    }
// }
//take 3 input from the user and check 1 input is even or odd ,Check 1 input is even so multiply 1 & 2  input.check 1 input is odd so add 3 of them.
// let m = parseInt(prompt("enter a number"))
// let n = parseInt(prompt("enter a number"))
// let o = parseInt(prompt("enter a number"))
// if(m%2 ==0){
//    console.log(m*n)
// }else{
//    console.log(m+n+o);
// }

//wap to make bill generator using switch case
// alert("Press 1 for samosa rs.12")
// alert("Press 2 for pakoda rs.14")
// alert("Press 3 for kachori rs.15")
// alert("Press 4 for bread pafoda rs.20")

// let c = parseInt(prompt("enter choice number"))
// let m = parseInt(prompt("enter quantity"))
// switch(c){
//    case 1:
      
      

//       alert("total amount = "+12*m)
//       break;
//    case 2:
      

//       alert("total amount = "+14*m)
//       break;
//    case 3:
      

//       alert("total amount = "+15*m)
//       break;
//    case 4:
      
//       alert("total amount = "+20*m)  
//       break; 
//    default:
//       alert("invalid choice") 


// }

// var ar = [5,4.5,'g',"qasim",5412]
// for(let i =0;i<5;i++){
//    console.log(ar[i])
// }
/*var ar =[]
for(let i =0;i<10;i++){
    ar[i] = parseInt(prompt())
}
for(let i =0;i<10;i++){
   console.log(ar[i])
}*/

//wap to add all  10 elements in an array

// var ar = [10,56,21,3,55,63,41,36,21,36,14,36,36,74,89.15,15,65,21,25,14,36,41,58]
// var sum = 0;
// for(let i =1;i<=10;i++){
//    sum += ar[i];

// } 
// console.log(sum)

//wap to print odd no. bt 20 to 1 in an array

// for(let i =20;i>=1;i--){
//    if(ar[i]>=1 && ar[i]<21){
//       if(ar[i]%2!=0){
//          console.log(ar[i])
//       }

//    }
   
// }


// 'for of' loop
// let ar = [10,9,8,7,6,5,4]
// for(let v of ar){
//    console.log(v)
// }

//'for in' loop
// for(let v in ar){
//    console.log(v)
// }


//array inbuilt function

//push function
// let ar = [5,6,8,96,12];
// let a = parseInt(prompt("Enter a first number"))
// let b = parseInt(prompt("Enter a second number"));
// let c = parseInt(prompt("Enter third number"))
// ar.push(a,c,b)
// document.write(ar)

//unshift function
// let ar = [56,5,12,36,2]
// var a = parseInt(prompt("enter a number"))
// var b = parseInt(prompt("enter another number"))
// ar.unshift(a,b)
// document.write(ar)

//pop up function
let ar = [56,23,1,45,5,0,0,-98]
// let removednumber = ar.pop();
// document.write(ar)
// document.write(removednumber);

//array.length
//document.write(ar.length)

//array push
//let num = [5,6,2,3]
//document.write(num.push(23))  //it gives length of the array
//console.log(num.push(23,25,"aman",'bajd',45.32,true,"naskjdja"))
//console.log(num)

//Array pop


// let num = [1,2,3,4]
// num.pop();
// document.write(num);

//














 
