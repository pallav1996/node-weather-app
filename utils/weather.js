const request = require('request');

const forecast = (latitude, longitude, callback) =>
{
    const apiKey = 'df639e20d0f5670f23f2030301699e48'
    const weatherUrl = 'https://api.darksky.net/forecast/' + apiKey+ '/'+ latitude + ',' + longitude

    request({url: weatherUrl, json: true}, (error, response) =>
{
    if(error)
    {
        callback("Unable to connect", error.code);
    }

    else if(response.body.error) //JSON is a string type object
    {
        callback("Unable to fetch weather.", response.body.error);
    }

    else
    {
        const data = response.body;
        callback(undefined, data.currently.summary);
    }
});
    
} 
module.exports = {
    forecast
}
