const btnE1 = document.getElementById("btn");
;
const errorMsgE1 = document.getElementById("errormsg")
const galleryE1 = document.getElementById("gallery")


btnE1.addEventListener("click", fetchImage);
async function fetchImage() {
    const inputValue = document.getElementById("input").value;
    if (inputValue > 10 || inputValue < 1) {
        errorMsgE1.style.display = "block";
        errorMsgE1.innerText = "Number shoul be  1 to 11"
        return
    }
    imgs ="";
    try {
        btnE1.style.display="none";
        await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()* 1000)}&client_id=RDJ5Fh578qiNkz_V3TYFj7wL7xk4X-ofxs72r-N1y0I`)
        .then((res) =>
            res.json().then((data) => {
                if(data){
                    data.forEach((pic) => {
                        imgs += `
                        <img src = ${pic.urls.small}
                        alt="image"/>
                        ` ;
                        galleryE1.style.display ="block";
                        galleryE1.innerHTML = imgs;
                        btnE1.style.display="block";
                        errorMsgE1.style.display = "none";

                    });
                }
            })
        )

    } catch (error) {
        console.log(error);
        errorMsgE1.style.display = "block";
     errorMsgE1.innerHTML= "an error happend please try again later" 
     btnE1.style.display="block";  
    }
}

