document.getElementById("login").addEventListener("click",display);

function display(e){
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById("password").value

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if(username === storedUsername && password === storedPassword){
        alert(`Login Successful , welcome ${storedUsername}`);
        window.location.href = "welcome.html"
    }else{
        alert("Incorrect details");
    }
}