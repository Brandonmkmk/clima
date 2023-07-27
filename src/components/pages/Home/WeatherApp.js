import "./weatherApp.css"
import { useRef, useState } from "react"
import  Button from "react-bootstrap/Button"
import imageClimate from "../../../assets/images/climatization.png"
import imageEarth from "../../../assets/images/earth.png"
import { useFetchData } from "../../../hooks/useFetchData"

const WeatherApp = ()=>{
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '5349df1b44c7a71ff547dcdf8c53779c'
    const celcius = 276.15
    const [city,setCity]=useState('')
    const {data,fetchData} = useFetchData()
    const inputRef = useRef()
    const hanldeChange = (e)=>{
    setCity(e.target.value)
    }
/*Si el input tiene un valor, se ejecuta la funcion fetchData, y se le pasa como argumento city,que es lo que el usuario escribio*/
    const handleClick = ()=>{
         if(city.length>0){
            fetchData(urlBase,city,API_KEY)
            inputRef.current.value=null
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
            data&&(
                <div className="container-city-result">
                      <div className="body-city-result">
                        <img className="image-city-climate" src={imageClimate} alt="Imagen de clima"/>
                      <h2>{data.name}</h2>
                    <p>Temperatura: {parseInt(data?.main?.temp-celcius)}</p>
                    <p>Condicion meteorologica: {data.weather[0].description}</p>
                      </div>
                </div>
            )
        }
        </>
    )
}
export default WeatherApp