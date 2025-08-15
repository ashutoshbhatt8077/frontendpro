let te = document.querySelector('.info1'); // Temperature
let ra = document.querySelector('.info2'); // Rain
let wi = document.querySelector('.info3'); // Wind
let hu = document.querySelector('.info4'); // Humidity

async function getExternalWeatherJSON() {
    const url = `https://wttr.in/Srinagar?format=j1`; // JSON format for Srinagar

    try {
        const resp = await fetch(url);
        if (!resp.ok) {
            console.warn(`Warning: weather API for Srinagar returned status ${resp.status}`);
            return null;
        }

        const data = await resp.json();

        // Extract weather data
        const temp = data.current_condition[0].temp_C; // °C
        const humidity = data.current_condition[0].humidity; // %
        const wind = data.current_condition[0].windspeedKmph; // km/h
        const rainChance = data.weather[0].hourly[0].chanceofrain; // %

        // Update HTML
        te.innerHTML = `<p>Temperature: ${temp}°C</p>`;
        ra.innerHTML =`<p>Chance of rain: ${rainChance}%</p>`;
        wi.innerHTML = `<p>Wind speed: ${wind} km/h</p>`;
        hu.innerHTML = `<p>Humidity: ${humidity}%</p>`;
    } catch (err) {
        console.warn("Warning: failed to fetch weather for Srinagar:", err);
    }
}
getExternalWeatherJSON();
setInterval(()=>{
getExternalWeatherJSON();
},2000)

