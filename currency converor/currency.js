const currencyFirstE1 = document.getElementById("currency-first");
const currencySecondE1 = document.getElementById("currency-second");
const worthFirstE1  = document.getElementById("worth-first");
const worthSecondE1 = document.getElementById("worth-second");
const exchangeRateE1 = document.getElementById("exchange-rate");


function updateRate(){
console.log("chj")


}
currencyFirstE1.addEventListener("change" , updateRate)

currencySecondE1.addEventListener("change" , updateRate)
worthFirstE1.addEventListener("input" , updateRate)