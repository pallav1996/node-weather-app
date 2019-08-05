const location = require('./utils/geocode')
const weather = require('./utils/weather')

const inp = require('readline-sync')


location.geoCode(inp.question("Enter the place: "), (error, geocodeData) =>{

    if(error)
        return console.log("Error:", error)
    
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
            })
    }

})



