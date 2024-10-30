

//form validation



function fun(){
    let name = document.getElementById("name").value
let contact = document.getElementById("contact").value
let age = document.getElementById("age").value
let email = document.getElementById("email").value
let pass = document.getElementById("pass").value
let confirmPass = document.getElementById("confirmpass").value
if(name == ""){
    alert("Please fill name ")
    document.getElementById("name").focus()
    document.getElementById("name").style.color="red"
    return false
}
else if (contact == ""){
    alert("pls fill contact")
    document.getElementById("contact").focus()
    document.getElementById("contact").style.color="red"
    return false
}else if(contact.length!=10){
    
} else if (age <= 18){
    alert("pls enter invalid age")
    document.getElementById("age").focus()
    document.getElementById("age").style.color="red"
    return false
}else if(!(email.includes("@gmail.com"))){
    alert("pls enter email address")
    document.getElementById("email").focus()
    document.getElementById("email").style.color="red"
    return false
}else if(!(pass.match(/[!@#$%^&*-_]/))){
    alert("pls enter valid password")
    document.getElementById("pass").focus()
    document.getElementById("pass").style.color="red"
    return false
}else if(confirmPass != pass){
    alert("pls enter confirm pass correct")
    document.getElementById("confirmpass").focus()
    document.getElementById("confirmpass").style.color="red"
    return false
}

}


//square of every element in an array
 let ar = [1,2,3,4,5]
 //let ans = []
// for(let i of ar){
//     console.log(i*i)
// }

//we can do this by using for of loop but this practice is wrong , it can,t change the original element of an array
//console.log(ar)

//so we will use for loop
// for(let i = 0;i<5;i++){
//     ans[i] = ar[i]*ar[i]
// }
// //for using for loop it also can,t change original array

// console.log(ar)
// console.log(ans)

//map() function

//syntax - map(funtion)  //callback or higher order function
let p = ar.map((t)=>{
    return t*t;
})

console.log(p)
