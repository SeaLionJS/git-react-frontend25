import React, { useEffect, useState } from 'react'
import './Weather.css'

export default function WeatherPage() {
    const [display, setDisplay] = useState("none")
    useEffect(()=> {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.82&lon=35.09&appid=3fb9bbee32445814b3b9605b4b734486')
        .then(r => r.json())
        .then((data) => {
            console.log(data)
        })
}, [])

    return (
        <>
        <h1>Weather page</h1>
        <button onClick={()=>setDisplay(display == "none"? "block":"none")}>open2</button>
        <div className='hidenMenu' style={{display:display}}>
            <p>1</p>
            <p>1</p>
            <p>1</p>
        </div>
        </>

    )
}
