const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API Key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    alert('City not found');
                } else {
                    displayWeather(data);
                }
            })
            .catch(error => console.error('Error fetching weather data:', error));
    } else {
        alert('Please enter a city name');
    }
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const weatherInfo = document.getElementById('weather-info');

    cityName.innerHTML = `Weather in ${data.name}, ${data.sys.country}`;
    temperature.innerHTML = `Temperature: ${data.main.temp}°C`;
    description.innerHTML = `Description: ${data.weather[0].description}`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    weatherInfo.style.display = 'block';
}
