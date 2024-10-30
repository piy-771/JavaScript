let heading = document.getElementById("main")
// heading.style.background="pink"
// heading.style.padding="50px"

//in one line
heading.style.cssText = "background-color: red; color:white; padding:20px;"

//changeing element and text
heading.innerHTML = "<u> ORACLE </u>"

//changing only text 
heading.innerText = "<u> text change </u>"

//changing image
let image = document.getElementById('image1')
image.src = "change.jpg"


