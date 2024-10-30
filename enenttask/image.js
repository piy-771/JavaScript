let v = document.getElementById("count")
let p = document.getElementById("price")

let num =0;
function inc(){
    num++;
    v.innerHTML = num;
    p.innerHTML = 500*num;
}

function dec(){
    num--;
    if(num >=0){
        
    v.innerHTML = num;
    p.innerHTML = 500*num;
    }
    
}