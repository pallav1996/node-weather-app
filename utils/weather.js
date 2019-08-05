const request = require('request');
<<<<<<< HEAD
const api = require('./apiKeys')

const forecast = ({latitude, longitude}, callback) => //destructuring geocodeData
{
    const apiKey = api.weather
    const weatherUrl = 'https://api.darksky.net/forecast/' + apiKey + '/'+ latitude + ',' + longitude

    request({url: weatherUrl, json: true}, (error, {body}) =>
=======

const forecast = (latitude, longitude, callback) =>
{
    const apiKey = 'df639e20d0f5670f23f2030301699e48'
    const weatherUrl = 'https://api.darksky.net/forecast/' + apiKey+ '/'+ latitude + ',' + longitude

    request({url: weatherUrl, json: true}, (error, response) =>
>>>>>>> 7733b774a211f68aa8489b0c00afa28ed0ab9a5c
{
    if(error)
    {
        callback("Unable to connect", error.code);
    }

<<<<<<< HEAD
    else if(body.error) //JSON is a string type object
    {
        callback("Unable to fetch weather.", body.error);
=======
    else if(response.body.error) //JSON is a string type object
    {
        callback("Unable to fetch weather.", response.body.error);
>>>>>>> 7733b774a211f68aa8489b0c00afa28ed0ab9a5c
    }

    else
    {
<<<<<<< HEAD
        const data = body;
        callback(undefined, data.currently.summary);
    }
})

}

=======
        const data = response.body;
        callback(undefined, data.currently.summary);
    }
});
    
} 
>>>>>>> 7733b774a211f68aa8489b0c00afa28ed0ab9a5c
module.exports = {
    forecast
}
