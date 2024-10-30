document.getElementById("btn1").addEventListener('click',show)

function show(){

}

const student =[
    {
        "rollno" :121,
        "name" : "sanju",
        "city" : "bhopal"
    },
    {
        "rollno" :122,
        "name" : "Aanju",
        "city" : "bhopal"
    },
    {
        "rollno" :123,
        "name" : "Ravi",
        "city" : "bhopal"
    }
]
const createdMap = new Map();
student.map((obj) => {
    createdMap.set(obj.type, obj.name);
});
console.log(student[1].name);