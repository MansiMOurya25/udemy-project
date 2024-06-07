

const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");


const apiKey = "";

const options = {
method:"GET",
header:{
    "X-Api-key" :apiKey,
}
}
const apiURL = "https://api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    try{

    
        jokeE1.innerText="updating";
        btnE1 .disabled=true;
        btnE1.innerText="loading ";
        
        
            const response = await fetch(apiURL , options)
            const data =  await response.json();
        
        
            btnE1.disabled = false ; 
            btnE1.innerTExt ="tell  me"
        jokeE1.innertext = data[0].joke;
        }
        catch(error){
            console.log("something wrong")
        }



        btnE1.addEventListener("click", getJoke);

    }
    
 