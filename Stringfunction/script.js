let mydata =  `hello everyone \n
my name is piyush, 
from sagar`
let x = "hello";

//concatiantion
let y = x.concat(" ","everyone");

x = "hello everyone how are you"
let newString = x.slice(5,12)
newString = x.slice(5)
newString = x.slice(-10,-5);


newString = x.substring(5,10);

console.log(newString)
console.log(x[2])
console.log(x.at(4))
console.log(x.charAt(6))
console.log(x.charCodeAt(3))   //it give utf value of that character
document.getElementById("demo").innerHTML = y;

function display(){
    let data = document.getElementById("demo1");
    data.style.backgroundColor = "Pink"
    data.style.border = "2px solid blue"
    data.innerHTML = `
    <table>
    <tr>
    <th>Name</th>
    <th>City</th>
    <th>Contact no.</th>
    </tr>
    <tr>
    <td>John Doe.</td>
    <td>Bhopal</td>
    <td>255684652</td>
    </tr>
    
    <tr>
    <td>John Doe.</td>
    <td>Bhopal</td>
    <td>255684652</td>
    </tr>

    </table>`
}
