const apikey="93dc2a3a1352b5da8246c737a59ff6aa";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    
    searchBtn.addEventListener("click", () => {
        checkWeather(searchInput.value);
    });
});

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        const weatherIcon = document.querySelector(".weather-icon");

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            case "Haze":
                weatherIcon.src = "images/Haze.png";
                break;
            default:
                weatherIcon.src = ""; // You might want to set a default icon here
                break;
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}






