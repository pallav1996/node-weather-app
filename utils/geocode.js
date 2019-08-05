const request = require('request');
const api = require('./apiKeys')
const geoCode = (address, callback) =>
{
    if(!address)
        return callback("Give proper address", undefined)

    const apiKey = api.geocode    
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + apiKey;

<<<<<<< HEAD
    request({url: geocodeUrl, json:true}, (error, {body}) =>
{
=======
    request({url: geocodeUrl, json:true}, (error, response) =>
    {
>>>>>>> 7733b774a211f68aa8489b0c00afa28ed0ab9a5c
    if(error)
    {
        callback("Unable to contact server. Try later", undefined);
    }

<<<<<<< HEAD
    else if(body.features.length === 0)
    {
        // callback("Give proper address", undefined)
        callback("Give proper address", undefined)
=======
    else if(response.body.features.length === 0)
    {
        callback("Give proper arguments", undefined)
>>>>>>> 7733b774a211f68aa8489b0c00afa28ed0ab9a5c
    }

    else{
        const data = {
<<<<<<< HEAD
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

=======
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
>>>>>>> 7733b774a211f68aa8489b0c00afa28ed0ab9a5c
