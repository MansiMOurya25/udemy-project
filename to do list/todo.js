const formE1 = document.querySelector(".form");

const inputE1 = document.querySelector(".input");
const ulE1 = document.querySelector("ul");

let list = JSON.parse(localStorage.getItem("list"));
list.forEach(task=>{
    todoList(task);
})

formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(inputE1.value);
    todoList()
});
function todoList(task) {
   let newtask = inputE1.value
if(task){
    newtask = task.name}



   let liE1 = document.createElement("li");
   if(task && task.checked){
    liE1.classList.add("checked");
    }
    liE1.innerText = newtask
    ulE1.appendChild(liE1);
    inputE1.value = "";

    const checkBtnE1 = document.createElement("div");
    checkBtnE1.innerHTML = `
<i class="fa-regular fa-square-check"></i>`;
    liE1.appendChild(checkBtnE1);
    const trashBtnE1 = document.createElement("div");
    trashBtnE1.innerHTML = ` <i class="fa-solid fa-trash"></i>`
    liE1.appendChild(trashBtnE1);


    checkBtnE1.addEventListener("click", () => {
        liE1.classList.toggle("checked");
        updateLocalstorage();
    })

    trashBtnE1.addEventListener("click", () => {
        liE1.remove();
        updateLocalstorage();
    })
    updateLocalstorage();
}

// that function will help to savr data in localstorage.
// thatswhy we called everywhrre to that function.
function updateLocalstorage() {
    const liE1s = document.querySelectorAll("li");
 list = []
    liE1s.forEach(liE1 => {
        list.push({
            name: liE1.innerText,
            checked: liE1.classList.contains("checked")
        })
    })
    localStorage.setItem("list" , JSON.stringify(list))
}


















