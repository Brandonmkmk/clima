import { useState } from "react"

export const useFetchData=()=>{
    const [data,setData]=useState(null)
      
     const fetchData = async(urlBase,value,API_KEY)=>{
        try {
            const response = await fetch(`${urlBase}?q=${value}&appid=${API_KEY}`)
            const data = await response.json()
            /*En cityClimate se guarda el objeto de la cuidad que se busco*/ 
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    return {
        data,
        fetchData
    }
}