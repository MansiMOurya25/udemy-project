const inputE1 = document.getElementById("input");
const errorE1 = document.getElementById("error");
const resutE1 = document.getElementById("result") ;

let errorTime ;
let resultTime;

function updateResults(){
    if(inputE1.value<= 0 || isNaN(inputE1.value))
    {
errorE1.innerText = "Please enter a valid number!"
clearTimeout(errorTime);  // to reset set timeout
errorTime = setTimeout(()=>{
errorE1.innerText = "" ;  //2 sec baad error chali jayegi
inputE1.value ="" ; // to blank minus value
} ,2000)
    }
    else{
resutE1.innerText = (+inputE1.value / 2.2).toFixed(2);
clearTimeout(resultTime);
resultTime = setTimeout (()=>{
    resutE1.innerText = "" ; 
    inputE1.value="";
} ,2000)

    }
}


inputE1.addEventListener("input", updateResults)