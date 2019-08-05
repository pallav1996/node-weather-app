const location = require('./utils/geocode')
const weather = require('./utils/weather')

const inp = require('readline-sync')


<<<<<<< HEAD
location.geoCode(inp.question("Enter the place: "), (error, geocodeData) =>{
=======
location.geoCode(inp.question("Enter the place: "), (error, data) =>{
>>>>>>> 7733b774a211f68aa8489b0c00afa28ed0ab9a5c

    if(error)
        return console.log("Error:", error)
    
<<<<<<< HEAD
    if(typeof(geocodeData) !== "undefined")
    {
        console.log()
        for(var item in geocodeData)
        {
            console.log(item, ":", geocodeData[item])
        }

            weather.forecast(geocodeData, (error, forecastData) =>
            {
                //console.log("Error: ", error)  Not needed since if coordinates are
                //                               bad/not present, func doesn't execute

                console.log("Weather: ", forecastData)
=======
    if(typeof(data) !== "undefined")
    {
        console.log()
        for(var item in data)
        {
            console.log(item, ":", data[item])
        }

            weather.forecast(data.latitude, data.longitude, (error, data) =>
            {
                //console.log("Error: ", error)  Not needed since if coordinates are
                //                               bad/not present func doesn't execute

                console.log("Weather: ", data)
>>>>>>> 7733b774a211f68aa8489b0c00afa28ed0ab9a5c
            })
    }

})



