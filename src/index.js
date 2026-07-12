import './style.css'
import { el } from './domHelper.js'
import { API_CONFIG } from '../config.js';

const searchedCity = document.querySelector('#city')
const searchBtn = document.querySelector('#searchBtn')
const weatherContainer = document.querySelector('#weatherContainer')

async function getWeather(city) {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.KEY}&q=${city}`)
        const weatherData = await response.json()
        return weatherData
    } catch (error) {
        console.error(error)
        return null
    }
}

function displayWeather(data) {
    const weatherUpdate = el('div', { classes: ['weather-update'] }, [
        el('div', { classes: ['weather-details'] }, [  // Fixed: added comma
            el('span', { textContent: '📍 Location: ' }),
            el('span', { textContent: `${data.location.name}, ${data.location.country}` })
        ]),
        el('div', { classes: ['weather-details'] }, [
            el('span', { textContent: '🕐 Last Update: ' }),
            el('span', { textContent: `${data.current.last_updated}, (Your time Zone is: ${data.location.tz_id})` })
        ]),
        el('div', { classes: ['weather-details'] }, [
            el('span', { textContent: '🌡️ Temperature: ' }),
            el('span', { textContent: `${data.current.temp_c}°C` })
        ]),
        el('div', { classes: ['weather-details'] }, [
            el('span', { textContent: '💨 Wind: ' }),
            el('span', { textContent: `${data.current.wind_mph} mph` })  // Fixed: removed condition.
        ]),
        el('div', { classes: ['weather-details'] }, [
            el('span', { textContent: '💧 Humidity: ' }),
            el('span', { textContent: `${data.current.humidity}%` })
        ]),
        el('div', { classes: ['weather-details'] }, [
            el('span', { textContent: '☁️ Condition: ' }),
            el('span', { textContent: `${data.current.condition.text}` })
        ]),
        el('img', {
            classes: ['weather-image'],
            src: `${data.current.condition.icon}`,
            alt: `${data.current.condition.text}`
        }),
    ])
    weatherContainer.innerHTML = ""
    weatherContainer.appendChild(weatherUpdate)
    searchedCity.value = ""
}

(() => {
    searchBtn.addEventListener('click', async () => {
        try {
            const city = searchedCity.value
            if (!city.trim()) {
                alert('Please enter a city name')
                return
            }
            const data = await getWeather(city)
            if (data.error) {
                alert(data.error.message)
                return
            }
            displayWeather(data)
        } catch (error) {
            alert(error.message || 'Something went wrong')
        }
    })
})()