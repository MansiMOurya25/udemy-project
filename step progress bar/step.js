const nextE1 = document.getElementById("next");
const stepE1 = document.querySelectorAll(".step");
const progressE1 = document.querySelector(".progress-bar-front");

const prevE1=document.getElementById("preview");



let currentChecked = 1 ;
prevE1.addEventListener("click" , ()=>{
    currentChecked--;
    if(currentChecked < 1){
        currentChecked = stepE1.length;
    }
   updateStepProgress() ;
});
nextE1.addEventListener("click" , ()=>{
    currentChecked++;
    if(currentChecked > stepE1.length){
        currentChecked = stepE1.length;
    }
   updateStepProgress() ;
});
function updateStepProgress(){
    stepE1.forEach((step ,idx)=>{
        if(idx < currentChecked){
            step.classList.add("checked");
            step.innerHTML = `<i class="fas fa-check"></i>
            <small>${idx === 0 ? "Start" :idx === stepE1.length -1 ? "Final" : "Step" + idx }</small> 
            ` ;
        }
        else{
            step.classList.remove("checked");
            step.innerHTML = `
            <i class ="fas fa-times"></i>
            ` ; 
        }
    });
    const checkNumber =document.querySelectorAll(".checked");
progressE1.style.width =(checkNumber.length -1)/ (stepE1.length -1)*100 +"%" ;

if(currentChecked ===1 ){
    prevE1.disabled = true;
}
else if(currentChecked === stepE1.length){
    nextE1.disabled = true;
}
else{
    prevE1.disabled =false;
nextE1.disabled =false;    

}
}












