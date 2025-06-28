import React, { useState } from 'react'
import './Weather.css'

export default function WeatherPage() {
    const [display, setDisplay] = useState("none")
    
    return (
        <>
        <h1>Weather page</h1>
        {/* <button onClick={function(){
            if(display == 'none'){
                setDisplay('block')
            } else {
                setDisplay('none')
            }
        }}>open</button> */}
        <button onClick={()=>setDisplay(display == "none"? "block":"none")}>open2</button>
        <div className='hidenMenu' style={{display:display}}>
            <p>1</p>
            <p>1</p>
            <p>1</p>
        </div>
        </>

    )
}
