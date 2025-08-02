const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)) + "°C";
    } else {
        return "N/A";
    }
}

const windChill = document.getElementById("windChill");

windChill.textContent = calculateWindChill(parseFloat(temperature.textContent), parseFloat(wind.textContent));