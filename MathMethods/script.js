let x = Math.sqrt(9);

//sign return 1 if number is positive , -1 if number is negative 
//0 when number is 0
x = Math.sign(0)

//Math.pow return power of an number
x = Math.pow(4,3)

//return absolute value always positive
x = Math.abs(-98)

//returns roundof value
x=Math.round(-9.2)


//return the above and higher value
x = Math.ceil(-6.49)


//return lower value
x = Math.floor(6.9)


//return minimum
x = Math.min(25,6,48,32,98,-98)

//return maximum
x = Math.max(56,98,-5,15,65)

//remove decimal numbers and give the integer value
x = Math.trunc(4.32654)

//Random number between 0(inclusive) and 1(exclusive)
x = Math.random();
x = Math.random()*100
x = Math.floor(Math.random()*100)





console.log(x)
//alert(x)
document.getElementById("demo").innerText = x