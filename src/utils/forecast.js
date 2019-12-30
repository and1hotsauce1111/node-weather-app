const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/4b4daabceb47d896326c94bcf12fa97b/${latitude},${longitude}?lang=ZH-TW&units=si`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary}當前溫度約${body.currently.temperature}度，降雨機率約${body.currently.precipProbability}。
           紫外線指數為${body.currently.uvIndex}。`
      )
    }
  })
}

module.exports = forecast
