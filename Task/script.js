
document.getElementById("btn1").addEventListener('click',run)

let start;
function run(){
    start = setInterval(()=>{
        document.getElementById("demo").innerText++;
    },1000)
    
}


document.getElementById("btn2").addEventListener("click",stop)

function stop(){
    
    clearInterval(start);
}
