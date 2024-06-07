
const btnE1 = document.getElementById("calculate")
const billInput= document.getElementById("bill")
const tipInput=document.getElementById("tip");
const totalSpan=document.getElementById("total");


btnE1.addEventListener("click" , calculateTotal);

function calculateTotal(){
const billValue= billInput.value
const tipValue= tipInput.value
const totalValue = billValue*(1+tipValue/100);
totalSpan.innerText= totalValue.toFixed(2); //its set decimal only two
}