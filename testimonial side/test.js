const testimonials = [
{
    name:"joy",
    photoUrl : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: " rich goodlooking , handsom , hardworking",
},
{
    name:"david",
    photoUrl : "https://images.unsplash.com/photo-1633332755192-728a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: " tolrance goodlooking , handsom , hardworking",
},

{
    name:"john",
    photoUrl : "https://images.unsplash.com/photo-1633332755192-731a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "goodlooking , handsom , hardworking",
},
]


let imgE1 = document.querySelector("img");
let userNameE1 = document.querySelector(".username");
let textE1 = document.querySelector(".text");

let idx = 0 ;
updateTestimonial();

function updateTestimonial(){
const {name, photoUrl, text} = testimonials[idx];
imgE1.src = photoUrl;
userNameE1.innerText = name;
textE1.innerText = text ;
idx++;
if (idx === testimonials.length){
    idx= 0 ;
}
setTimeout(()=>{
    updateTestimonial()
} ,10000)
}