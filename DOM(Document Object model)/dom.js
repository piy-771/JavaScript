// document.getElementById("head").innerHTML="Aman Rawat"
// document.getElementById("head").style.backgroundColor="yellow"
// document.getElementById("head").style.padding="50px"

let first_heading = document.getElementById("head")
first_heading.style.color="white"
first_heading.style.backgroundColor="black"

let list = document.getElementsByTagName('li')

//list[1].style.backgroundColor="red"

//h.w
//10 list item color is grey
for(let i = 0;i<list.length;i++){
    if(i%2!=0){
        list[i].style.backgroundColor="grey"
    }
}
    
    




