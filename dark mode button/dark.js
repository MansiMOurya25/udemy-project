const inputE1 =document.querySelector(".input");
console.log(inputE1.checked);

const bodyE1 = document.querySelector("body");
inputE1.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

function updateBody(){
    if(inputE1.checked){
        bodyE1.style.background = "black"
    }
    else {
       bodyE1.style.background = "white" 
    }
}
// input will check what is situation of toggle true or false;
inputE1.addEventListener("input" , ()=>{
    updateBody();
    updateLocalStorage();
})
function updateLocalStorage(){
    localStorage.setItem("mode" , JSON.stringify(inputE1.checked));
}