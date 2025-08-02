const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");

const calculateWindChill = (t, w) => Math.round(13.12 + 0.6215 * t - 11.37 * w ** 0.16 + 0.3965 * t * w ** 0.16) + "°C";

const windChill = document.getElementById("windChill");

if (parseFloat(temperature.textContent) <= 10 && parseFloat(wind.textContent) > 4.8) {
    if (temperature && wind) {
        windChill.textContent = calculateWindChill(parseFloat(temperature.textContent), parseFloat(wind.textContent));
    }
} 
else {
    windChill.textContent = "N/A";
}
