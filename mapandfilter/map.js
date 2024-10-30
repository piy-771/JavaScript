let ar = [1,2,3,4,5]

//map

let p = ar.map((t)=>{
    return t;
})

console.log(p)

//filter

//divisible by 2

let data = ar.filter((e)=>{
    return e%2==0
})
console.log(data)

//greater than 3
let data1 = ar.filter((e)=>{
    return e>3
})
console.log(data1)

// let ar1 = [2,5,6,9]
// let ar2 = [5,6,254,3]
// let ar3 = [ar1+ar2]
// console.log(typeof ar3)
// console.log(ar3)

//using spread operator
let ar1 = [2,5,6,9]
let ar2 = [5,6,254,3]
let ar3 = [...ar1,...ar2]
console.log(ar3)
console.log(typeof ar3)


//ex 2
let ar4 = [4,6,5,2,...ar1]
console.log(ar4)


//destructring of array
let[name,age,city,k] = ["aatmik",91,"bhopal"]
console.log(name)
console.log(age)
console.log(city)
console.log(k)

let obj = {
    emp_name:"ankita",
    emp_position:"Hr"

}
let obj1 = {
    emp_salary:25000
}

//concactinating using spread
let obj3 = {...obj,...obj1}
console.log(obj3)

//destrutring of object
let{emp_name,emp_salary,emp_position} = {
    emp_name:"piyush",
    salary:5345,
    position : "developer"
}

console.log(emp_name)
console.log(emp_salary)
console.log(emp_position)



