// let person = {
//     name : "john doe",
//     age :31
// };
// localStorage.clear();

// let personString = JSON.stringify(person);  //any type to string

// localStorage.setItem("person",personString)

// let data = localStorage.getItem("person")
// // alert(data)
// let newData = JSON.parse(data)  //string to object

// alert(newData.name + " " + newData.age);

// function generatePassword(){
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz0123456789!@#$%^&*";
//     for(let i = 1;i<= 8;i++){
//         let char = Math.floor(Math.random() * str.length + 1)
//         pass += str.charAt(char);
//     }
//     return pass;
// }

// function display(){
//     document.getElementById('demo').innerHTML = generatePassword();
// }


function sum(...num){
    let sum = 0;
    num.map((t)=>{
        sum += t;
        
    })
    // for(let i = 0;i<num.length;i++){
    //     sum += num[i];
    // }
    return sum;
} 

console.log(sum(2,1,3,4,5))






