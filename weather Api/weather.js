const apikey = "34af72b7ca34d8f2b8223fb55feaf7a5";
const weatherDataE1 = document.getElementById("weather-data");

const cityInputE1 = document.getElementById("city-input");
const formE1 = document.querySelector("form");

formE1.addEventListener("submit", (event) => {
    event.preventDefault()
    const cityValue = cityInputE1.value;
    console.log(cityValue);
  getWeatherData(cityValue);
});

async function  getWeatherData(cityValue) {
    try {
        const response = await fetch (https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
if(!response.ok){
    throw new Error("Network was not response")
}
const data = await response.json();
console.log(data);
const temperature =data.main.temp
    }
     catch(error) {

    }
}