import '../scss/main.scss';
const apiKey = '75e42ba9211fa4d0c5c4dbdeb0081979';
const city = 'Odesa';

const weatherWidget = document.getElementById('weather-widget');
const locationEl = document.getElementById('location');
const tempEl = document.getElementById('temperature');
const descEl = document.getElementById('description');
const feels = document.getElementById('feels');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const refreshBtn = document.getElementById('refresh-btn');
const date = document.getElementById('date')

const fetchForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) { 
                locationEl.textContent = `${data.name}, ${data.sys.country}`;
                tempEl.textContent = `${Math.round(data.main.temp)}°C`;
                descEl.textContent = data.weather[0].description;
                feels.textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
                visibility.textContent = `Visibility: ${data.visibility} m`;
                date.textContent = new Date().toLocaleString()

            } else {
                locationEl.textContent = 'Error while loading the data';
                tempEl.textContent = '-';
                descEl.textContent = '-';
                feels.textContent = '-';
                humidity.textContent = '-';
                pressure.textContent = '-';
                country.textContent = '-';
                visibility.textContent = '-';
            }
        })
        .catch(error => {
            locationEl.textContent = 'Network connection error';
            tempEl.textContent = '-';
            descEl.textContent = '-';
            feels.textContent = '-';
            humidity.textContent = '-';
            pressure.textContent = '-';
            country.textContent = '-';
            visibility.textContent = '-';
        });
};

refreshBtn.addEventListener('click', fetchForecast);

fetchForecast();
