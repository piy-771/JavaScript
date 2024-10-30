let employee = [
{
    employee_name : "Qasim",
    age : 20,
    employee_position : "Developer"

},
{
    employee_name : "Piyush",
    age : 25,
    employee_position : "Advisor"
},
{
    employee_name : "Lalit",
    age : 15,
    employee_position : "Pionee"
},
{
    employee_name : "Ketan",
    age : 22,
    employee_position : "banker"
},
{
    employee_name : "Kartik",
    age : 30,
    employee_position : "CEO"

}
]

//console.log(employee)
//console.log(employee)
// let y = employee.map((p)=> {
//     return p
// })

//console.log(y)
// console.log(p)

let x = employee.filter((p)=> {
    return p.age>22
})

console.log(typeof x)

let t = {
    employee_name : "Kartik",
    age : 30,
    employee_position : "CEO"

}

// employee.push(t)
// console.log(employee)

// employee.pop()
// console.log(employee)

// employee.unshift(t)
// console.log(employee)

// employee.shift()
// console.log(employee)

//console.log(employee.slice(2));
//console.log(employee.slice(1,3));


employee.splice(0,3,t)
console.log(employee);



