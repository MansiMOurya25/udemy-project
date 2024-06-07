const navbarE1 = document.querySelector(".navbar");
const bottomcontainerE1 = document.querySelector(".bottom-container");
console.log(navbarE1.offsetHeight);
console.log(bottomcontainerE1.offsetTop)
window.addEventListener("scroll" , ()=>{
    if(window.scrollY> bottomcontainerE1.offsetHeight - navbarE1.offsetHeight - 50){
        navbarE1.classList.add("active");
    }
    else{
        navbarE1.classList.remove("active");
    }
})