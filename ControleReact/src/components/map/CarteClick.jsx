import React, { useContext, useEffect } from 'react'
import { useMapEvents } from "react-leaflet"
import Context from '../../context/context'


const CarteClick = () => {

    const { state, dispatch } = useContext(Context)
   useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng
            dispatch({ marker: [lat, lng], type: 'addMarker' })

            if ('vibrate' in navigator) navigator.vibrate(100)
        }
    })

    useEffect(() => {
        console.log(state);
    }, [state])

 

    return null
}

export default CarteClick