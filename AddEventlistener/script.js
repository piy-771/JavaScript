let mybutton = document.getElementById('btn');
mybutton.addEventListener("click",function(){
    document.getElementById('demo').innerHTML = "Hello";
});

mybutton.addEventListener("click",display);

function display(){
    document.getElementById('demo1').innerHTML = "World";
}

mybutton.addEventListener("mouseenter",data);
function data(){
    document.getElementById("demo2").innerHTML = Math.random();
}

//remove event
mybutton.removeEventListener("click",display);