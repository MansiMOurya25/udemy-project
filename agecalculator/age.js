const btnE1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday")
const resultE1= document.getElementById("result")

btnE1.addEventListener("click", calculateAge)

function calculateAge() {
    const birthdayValue = birthdayE1.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday")
    }
    else {
        const age = getAge(birthdayValue)
        console.log(age);
        resultE1.innerText=` Your age is ${age} ${age>1?"years":"year"} `
    }
function getAge(birthdayValue) {
    const currentDate = new Date() //f  this it show current date
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    console.log(age);
    
 //getmonth , getDate and getfullyear gives value of date ,year , and month 
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || 
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--; //month se km hogi toh ek saal km btaega 
    }

    return age;
}
}
