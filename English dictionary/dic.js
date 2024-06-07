const inputE1 = document.getElementById("input");
const infoTextE1 = document.getElementById("info-text")
const meaningContainerE1 =document.getElementById("meaning-container")
const meaningE1 = document.getElementById("meaning");
const titleE1 = document.getElementById("title");
const audioE1 = document.getElementById("audio");



async function fetchAPI(word) {

    try {
        infoTextE1.style.display = "block";
  infoTextE1.innerText = `Searching the meaning of "${word}"`
  meaningContainerE1.style.display ="none";

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json());

        
        if(result.title){  //if any error so else run 
            meaningContainerE1.style.display ="block";
            titleE1.innerText = word;
            meaningE1.innerText ="not find";
        audioE1.style.display ="none";
        }
        else{

            infoTextE1.style.display = "none"
            meaningContainerE1.style.display ="block";
            audioE1.style.display ="inline-flex";
            titleE1.innerText = result[0].word;
            meaningE1.innerText =result[0].meanings[0].definitions[0].definition;
        audioE1.src= result[0].phonetics[0].audio;
        }}
 catch (error) {
        console.log(error);
        infoTextE1.innerText = `an error happen`
    }
}

inputE1.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }
})

