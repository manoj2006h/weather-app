const loc = document.querySelector('#city')
const date = document.querySelector('#date')
const temp = document.querySelector('#temperature')
const condition = document.querySelector('#condition')
const today = new Date()



date.textContent = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
})

const city = document.querySelector('#city-input')

const apiKey = '&appid=6134c456b6c297db26e30ff41a3a6438'
const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q='

async function checkWeather(search) {
    const response = await fetch(apiLink + search + '&units=metric' + apiKey)

    if (!response.ok) {
        alert('Enter correct city name !')
        document.querySelector('#city-input').value = ""
        return
    }

    let data = await response.json()
    console.log(data);
    loc.innerHTML = data.name
    temp.innerHTML = Math.round(data.main.temp)
    document.querySelector('#feels-like').innerHTML = Math.round(data.main.feels_like) + '°C'
    document.querySelector('#humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('#condition').innerHTML = data.weather[0].description
    document.querySelector('#wind').innerHTML = data.wind.speed + 'km/h'
    const today = new Date()

    const weatherDescription = data.weather[0].description

    let weatherIcon

    if (weatherDescription === 'clear sky') {
        weatherIcon = '☀️'
    }
    else if (weatherDescription === 'few clouds') {
        weatherIcon = '🌤️'
    }
    else if (weatherDescription === 'scattered clouds') {
        weatherIcon = '⛅'
    }
    else if (weatherDescription === 'broken clouds') {
        weatherIcon = '🌥️'
    }
    else if (weatherDescription === 'overcast clouds') {
        weatherIcon = '☁️'
    }
    else if (weatherDescription === 'light rain') {
        weatherIcon = '🌦️'
    }
    else if (weatherDescription === 'moderate rain') {
        weatherIcon = '🌧️'
    }
    else if (weatherDescription === 'heavy intensity rain') {
        weatherIcon = '🌧️'
    }
    else if (weatherDescription === 'thunderstorm') {
        weatherIcon = '⛈️'
    }
    else if (weatherDescription === 'light snow') {
        weatherIcon = '🌨️'
    }
    else if (weatherDescription === 'mist') {
        weatherIcon = '🌫️'
    }
    else if (weatherDescription === 'fog') {
        weatherIcon = '🌫️'
    }
    else if (weatherDescription === 'haze') {
        weatherIcon = '🌫️'
    }

    document.querySelector('#weather-icon').textContent = weatherIcon
}


function defaultCity() {
    checkWeather('Davanagere')
}

defaultCity()

document.querySelector('#search-btn').addEventListener('click', () => {
    checkWeather(city.value)
})






