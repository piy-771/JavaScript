//types of expot -
//1.named export
const name = "john"
const age = 30;

export{name,age}

//or
// export const name = "john";
// export const age = 30

//2.default export -- only one thing can be exported
const data = ()=>{
    let firstName = "Anurag"
    let lastName = "Pandey"
    return firstName + " " + lastName;
}

export default data;