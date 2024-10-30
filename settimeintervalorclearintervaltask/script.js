function settime(){
    setInterval()
}
document.getElementById('btn1').addEventListener("click",s)


// function display(){
// function hello(){
//     document.getElementById("demo").innerHTML += "hello";
// }
//      setInterval(hello,1000);
// }

function hello(){
    document.getElementById('demo').innerHTML += 'hello'

}
document.getElementById('btn2').addEventListener("click",stop)
function stop(){
    clearInterval(s)
}