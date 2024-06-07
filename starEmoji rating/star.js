const starE1 = document.querySelectorAll(".fa-star");
const emojisE1= document.querySelectorAll(".fa-solid")
const colorsArray = ["red" , "orange" , "lightblue" , " lightgreen" , "green"]

updateRating(0);


starE1.forEach((starE1 , index)=>{
    starE1.addEventListener("click" , ()=>{
updateRating(index)
    });
})
function updateRating(index){
starE1.forEach((starE1 , idx)=>{
    if(idx <= index){
        starE1.classList.add("active")
    }
    else{
        starE1.classList.remove("active");
    }
});

emojisE1.forEach((emojiE1)=>{
emojiE1.style.transform =`translateX(-${index*50}px)`;
emojiE1.style.color= colorsArray[index];
})


}