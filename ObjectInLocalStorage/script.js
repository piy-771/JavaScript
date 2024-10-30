let person = {
   name:"John Doe",
   age :45
};

let jsonPerson = JSON.stringify(person)

localStorage.setItem("person",jsonPerson)

let data = localStorage.getItem("person")

let newdata = JSON.parse(data)
alert(newdata.name + " " + newdata.age)

