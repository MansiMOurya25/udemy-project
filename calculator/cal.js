const buttonsE1 = document.querySelectorAll("button");
const inputFieldE1 = document.getElementById("result")

// to add event listerner with using for loop in 17 buttons

for(let i = 0 ; i<buttonsE1.length ; i++){
    buttonsE1[i].addEventListener("click",()=>{
        const buttonValue = buttonsE1[i].textContent;
        if(buttonValue === "C"){
            clearResult()
        } else if( buttonValue === "="){
        calculateResult()
        } else{
            appendValue(buttonValue);
        }
    })
}
function clearResult(){
inputFieldE1="";
}

function calculateResult(){
inputFieldE1.value = eval(inputFieldE1.value) //eval give funtionality to solve problems
}

function appendValue(buttonValue){
inputFieldE1.value = inputFieldE1.value+buttonValue;  //its help to write one more result like 10 ,100


}