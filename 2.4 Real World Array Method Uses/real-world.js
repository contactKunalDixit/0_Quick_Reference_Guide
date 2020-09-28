/*
 *  WEATHER APP - A real world example of taking some weather data from the DarkSky API and creating a Grid of weather over a 24 hour period 
 * 
 * Used:        
 * 
 *          Array.map()
 *          Array.filter()
 *          Array.forEach()
 *          Array.reduce()
 * 
 * 
 * 
 * app Objective:
 * 
 *  Use each of the time stamps for projecting it in on hourly basis
 *  convert the time stamp and convert that into actual hour and write the same in each of the small sections
 * the span within each small div(representing each hour) will hold the hour info
 * check which hour has the perticipation and change the backGround accordingly to Blue
 * Find the highest temp of all the data and high;light it in gold
 */


{
    "request": {
        "type": "City",
        "query": "New York, United States of America",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "New York",
        "country": "United States of America",
        "region": "New York",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "America\/New_York",
        "localtime": "2020-09-26 07:44",
        "localtime_epoch": 1601106240,
        "utc_offset": "-4.0"
    },
    "current": {
        "observation_time": "11:44 AM",
        "temperature": 19,
        "weather_code": 113,
        "weather_icons": ["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0008_clear_sky_night.png"],
        "weather_descriptions": ["Clear"],
        "wind_speed": 0,
        "wind_degree": 0,
        "wind_dir": "N",
        "pressure": 1020,
        "precip": 0,
        "humidity": 81,
        "cloudcover": 0,
        "feelslike": 19,
        "uv_index": 1,
        "visibility": 16,
        "is_day": "no"
    }
}


FUNCTION_NAME({
    "request": {
        "type": "City",
        "query": "New York, United States of America",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "New York",
        "country": "United States of America",
        "region": "New York",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "America\/New_York",
        "localtime": "2020-09-26 07:44",
        "localtime_epoch": 1601106240,
        "utc_offset": "-4.0"
    },
    "current": {
        "observation_time": "11:44 AM",
        "temperature": 19,
        "weather_code": 113,
        "weather_icons": ["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0008_clear_sky_night.png"],
        "weather_descriptions": ["Clear"],
        "wind_speed": 0,
        "wind_degree": 0,
        "wind_dir": "N",
        "pressure": 1020,
        "precip": 0,
        "humidity": 81,
        "cloudcover": 0,
        "feelslike": 19,
        "uv_index": 1,
        "visibility": 16,
        "is_day": "no"
    }
})