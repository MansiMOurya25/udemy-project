let form = document.querySelector(".form");
let ulE1 = document.querySelector("ul");
let inputE1 = document.querySelector(".input");

let list = JSON.parse(localStorage.getItem("list"));
list.forEach(task=>{
    toDolist(task);
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    toDolist();
}
);
function toDolist(task) {
    let newTask = inputE1.value;

if(task){
    newTask = task.name
}

    let liE1 = document.createElement("li");
    if(task && task.checked){
        liE1.classList.add("checked");
    }
    liE1.innerText = newTask;
    ulE1.appendChild(liE1);
    inputE1.value = "";
    const checkedBtn = document.createElement("div");
    checkedBtn.innerHTML = `
    <i class="fa-regular fa-square-check"></i>`
    liE1.appendChild(checkedBtn);
    const trashBtn = document.createElement("div");
    trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    liE1.appendChild(trashBtn);

    checkedBtn.addEventListener("click", () => {
        liE1.classList.toggle("checked");
        updateLocalstorage();
    })

    trashBtn.addEventListener("click", () => {
        liE1.remove();
        updateLocalstorage();
    })
updateLocalstorage();
}
// to save in localStorage
function updateLocalstorage() {
    let liE1s = document.querySelectorAll("li");
    list = []

    liE1s.forEach(liE1 => {
        list.push({
            name: liE1.innerText,
            checked: liE1.classList.contains("checked")

        })
    })
    localStorage.setItem("list" , JSON.stringify(list));
}