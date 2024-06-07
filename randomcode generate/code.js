const btnE1 = document.getElementById("btn")
const quoteE1 =document.getElementById("quote")
const authorE1 = document.getElementById("author")
const apiURL = "https://api.quotable.io/random" ;
btnE1.addEventListener("click", getQuote);
async function getQuote(){
   try {
    btnE1.innerText= "loading......";
    btnE1.disabled = true;
    quoteE1.innerText= "updating....."
    authorE1.innerText = "updating....."
        const response =  await fetch(apiURL)
        const data =  await response.json();
        const quoteContent = data.content ;
        const quoteAuthor = data.author;
        quoteE1.innerText = quoteContent;
        authorE1.innerText = "~"+ quoteAuthor ;
        btnE1.innerText= "Get A Quote";
    btnE1.disabled = false;
     
        console.log(data); 
     }
     
catch (error) {
    console.log(error)
    quoteE1.innerText = "an error happened"
    btnE1.disabled = false;
}
}


