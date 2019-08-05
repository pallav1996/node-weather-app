const request = require('request');
const api = require('./apiKeys')
const geoCode = (address, callback) =>
{
    if(!address)
        return callback("Give proper address", undefined)

    const apiKey = api.geocode    
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${apiKey}`;

    request({url: geocodeUrl, json:true}, (error, {body}) =>
{
    if(error)
    {
        callback("Unable to contact server. Try later", undefined);
    }

    else if(body.features.length === 0)
    {
        // callback("Give proper address", undefined)
        callback("Give proper address", undefined)
    }

    else{
        const data = {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name    
            }
        
        callback(undefined, data)
        }
})
}

module.exports = {
    geoCode
}

