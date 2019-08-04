const location = require('./utils/geocode')
const weather = require('./utils/weather')

const inp = require('readline-sync')


location.geoCode(inp.question("Enter the place: "), (error, data) =>{

    if(error)
        return console.log("Error:", error)
    
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
            })
    }

})



