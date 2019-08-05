const request = require('request');
const api = require('./apiKeys')

const forecast = ({latitude, longitude}, callback) => //destructuring geocodeData
{
    const apiKey = api.weather
    const weatherUrl = 'https://api.darksky.net/forecast/' + apiKey + '/'+ latitude + ',' + longitude

    request({url: weatherUrl, json: true}, (error, {body}) =>
{
    if(error)
    {
        callback("Unable to connect", error.code);
    }

    else if(body.error) //JSON is a string type object
    {
        callback("Unable to fetch weather.", body.error);
    }

    else
    {
        const data = body;
        callback(undefined, data.currently.summary);
    }
})

}

module.exports = {
    forecast
}
