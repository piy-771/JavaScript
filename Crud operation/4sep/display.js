async function dataShow(){
    let myTable = `
    <table border="1px width="600px" align="center">
    <tr bgcolor = "yellow">
    <th>ID</th>
    <th>Employee no</th>
    <th>Employee Name</th>
    <th>Salary</th>
    <th>City</th>
    </tr>
    `;

    let url = "http://localhost:3000/employees";
    let myobj = await fetch(url);
    console.log(myobj);

    let mydata = await myobj.json();
    console.log(mydata);

    mydata.map((key) => {
        myTable += `
        <tr>
        <td>${key.id}</td>
        <td>${key.employeeno}</td>
        <td>${key.name}</td>
        <td>${key.salary}</td>
        <td>${key.city}</td>
        </tr>
        `
    });

    myTable  += `</table>`;
    document.getElementById('demo').innerHTML = myTable;
}

dataShow();