const btnE1 = document.getElementById("btn");
const emojiNameE1 = document.getElementById("emoji-name");

const emoji = [] ;
 async function getEmoji(){
let response = await fetch("http://emoji-api.com/emojis?access_key=5ae3577d54be3ce7c60be26c11260366de5feaf7")
data = await response.json();
for(let i=0 ; i<1500 ; i++){
    emoji.push({
        emojiName : data[i].character ,
        emojiCode : data[i].unicodeName ,
    });
}

}
getEmoji();
btnE1.addEventListener("click" , ()=>{
    const randomNum =Math.floor(Math.random()*emoji.length )
    btnE1.innerText = emoji[randomNum].emojiName;
    emojiNameE1.innerText = emoji[randomNum].emojiCode;
})