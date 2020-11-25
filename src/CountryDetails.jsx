import React, { useEffect, useState } from 'react'
import axios from 'axios'
const CountryDetails = ({item}) => {

    const [weatherData, setWeatherData ] = useState([])
    const [capital, setCapital] = useState(item.capital)
    const weather_key = process.env.REACT_APP_API_KEY
    // console.log(weather_key)
    console.log(capital)
    

    useEffect( () =>{
        axios
          .get(`http://api.weatherapi.com/v1/current.json?key=${weather_key}&q=${capital}`)
          .then(response => {
                // console.log(response.data.current)
              setWeatherData(response.data)
          }).catch(e => console.log(e))
    }, [capital])

    return(
        <div>
            <img src={`${item.flag}`} alt="" style={{height: 50, width: 50}}/>
            <h3>{item.name}</h3>
            <p>capital:{item.capital}</p>
            <p>population: {item.population}</p>
            <h4>languages</h4>
                <ul>
                    {item.languages.map(lang => 
                        <li>{lang.name}</li>
                    )}
                </ul>
                <p>Weather in {capital}</p>
                {/* {console.log(weatherData.current.icon)} */}
                {/* <p>Temperature Celsius : {weatherData.current.temp_c}</p>
                <p>Humidity: {weatherData.current.humidity}</p> */}
                {/* <img src={`${weatherData.current.icon}`} alt=""/>
                <p>Temperature: {weatherData.current.temp_c}</p>
                    <p>Weather Speed: {weatherData.current.wind_kph} kph</p>      */}
        </div>   
    )
}

export default CountryDetails;