const request = require('request');
const api = require('./apiKeys')
const geoCode = (address, callback) =>
{
    if(!address)
        return callback("Give proper address", undefined)

    const apiKey = api.geocode    
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + apiKey;

    request({url: geocodeUrl, json:true}, (error, response) =>
    {
    if(error)
    {
        callback("Unable to contact server. Try later", undefined);
    }

    else if(response.body.features.length === 0)
    {
        callback("Give proper arguments", undefined)
    }

    else{
        const data = {
            latitude : response.body.features[0].center[1],
            longitude : response.body.features[0].center[0],
            location: response.body.features[0].place_name    
        }
        
        callback(undefined, data)
        }
    });

}


module.exports = {
    geoCode
}