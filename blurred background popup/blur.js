const containerE1 = document.querySelector(".container");
const btnE1 = document.querySelector(".btn1");
const popupContainerE1 = document.querySelector(".popup-container");
const closeE1 = document.querySelector(".close-icon");
console.log(containerE1);
console.log(btnE1);
function newfunc(){
    console.log("ej")
    containerE1.classList.remove("active");
    popupContainerE1.classList.add("active")
}
btnE1.addEventListener("click" ,newfunc());