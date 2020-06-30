const rp = require('request-promise')

module.exports = async function(city = '') {
    if(!city) {
        throw new Error('Имя города не может быть пустым.')
    }

    const KEY = 'f034c141b4d4cf829b875f166fa58d68'

    const uri = 'https://api.openweathermap.org/data/2.5/weather'

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial',
            lang: 'ru'
        },
        json: true
    }

    try {
        const data = await rp(options)
        const celsius = (data.main.temp - 32) * 5/9
        const wind = data.wind.speed * 0.44704
        const clouds = data.weather[0]['description']

        return {
            citySearch: `${data.name}, ${clouds}`,
            weatherTemp: `Температура воздуха: ${celsius.toFixed(0)}°C`,
            weatherWind: `Скорость ветра: ${wind.toFixed(2)} м/с`,
            error: null
        }
    } catch(error) {
        return {
            citySearch: null,
            weatherTemp: null,
            weatherWind: null,
            error: error.error.message
        }
    }  
}