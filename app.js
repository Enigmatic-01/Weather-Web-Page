

const windInfo= async (weatherData)=>{
    let wind = await weatherData.wind.speed+"Km/H";
    document.querySelector("#windSpeed").innerText = wind;
};
const tempInfo = async (weatherData)=>{
    let temp = await weatherData.main.temp ;
    let c = Math.round(temp - 273) ;
    document.querySelector("#temp").innerText = c + "°C";
};
const cloudsInfo =async (weatherData)=>{
    let clouds = await weatherData.weather[0].description;
    document.querySelector("#clouds").innerText = clouds;
    let cloudsno = await weatherData.weather[0].icon;
    cloudsImg(cloudsno);

}
const humidityInfo = async (weatherData) => {
    let humidity = await weatherData.main.humidity+"%";
    document.querySelector("#humdityLevel").innerText=humidity;
}

const cloudsImg= (clouds)=>{
     document.querySelector("#imgWeather").setAttribute("src",`https://openweathermap.org/img/wn/${clouds}@2x.png`)
}
const cityInfo =()=>{
    document.querySelector("button").addEventListener("click",()=>{
        let city=document.getElementById("citySearch").value;
        data(city);
    })
}
let data = async(cityname)=>{
    let response = await fetch(url.replace("{city name}",cityname).replace("{API key}",aip));
    let weatherData = await response.json();
    cloudsInfo(weatherData);
    humidityInfo(weatherData);
    windInfo(weatherData);
    tempInfo(weatherData);
    realTime();
}
const realTime = ()=>{
const now = new Date();
const time = now.toLocaleTimeString();
let displayTime =document.querySelector("#time").innerText="Time :- "+time;
}



cityInfo();
