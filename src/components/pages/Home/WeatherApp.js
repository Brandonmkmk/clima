import "./weatherApp.css"
import { useRef, useState } from "react"
import  Button from "react-bootstrap/Button"
import imageClimate from "../../../assets/images/climatization.png"
import imageEarth from "../../../assets/images/earth.png"

const WeatherApp = ()=>{
     
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '5349df1b44c7a71ff547dcdf8c53779c'
    const celcius = 276.15


    const [city,setCity] = useState('')
    const [dataClimate,setDataClimate] = useState(null)
    const inputRef = useRef()

    const hanldeChange = (e)=>{
    setCity(e.target.value)
    }

    const handleClick = ()=>{
         if(city.length>0){
            fetchData(city)
            inputRef.current.value=null
         }
    }

    const fetchData = async(searchCity)=>{
        try {
            const response = await fetch(`${urlBase}?q=${searchCity}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClimate(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <div className="logo-climate">
            <img src={imageEarth} alt="Logo clima"/>
        </div>
        <div className="container-search-city">
            <input ref={inputRef} type="text" placeholder="Ingresa una cuidad" onChange={hanldeChange}/>
            <Button onClick={handleClick} variant="primary">Buscar</Button>
        </div>
        {
            /*si data es true se ejecuta el codigo*/ 
            dataClimate&&(
                <div className="container-city-result">
                      <div className="body-city-result">
                        <img className="image-city-climate" src={imageClimate} alt="Imagen de clima"/>
                      <h2>{dataClimate.name}</h2>
                    <p>Temperatura: {parseInt(dataClimate?.main?.temp-celcius)}</p>
                    <p>Condicion meteorologica: {dataClimate.weather[0].description}</p>
                      </div>
                </div>
            )
        }
        </>
    )
}
export default WeatherApp