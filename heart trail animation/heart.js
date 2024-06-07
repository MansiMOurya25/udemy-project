const bodyE1 = document.querySelector("body");
const spanE1 = document.querySelector("span");


bodyE1.addEventListener("mouseover" , (event)=>{
    const xPos = event.offsetX
    const yPos = event.offsetY
const spanE1 = document.createElement("span")

const size = Math.random()*100 ;
spanE1.style.width = size+ "px" ;
spanE1.style.height = size +"px";

spanE1.style.left = xPos + "px";
spanE1.style.top = yPos + "px";
bodyE1.appendChild(spanE1);
setTimeout(()=>{
    spanE1.remove();
}, 3000);

})