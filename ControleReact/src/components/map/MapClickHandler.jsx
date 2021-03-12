import React, { useContext, useEffect } from 'react'
import { useMapEvents } from "react-leaflet"
import Context from '../../context/context'


const MapClickHandler = () => {

    const { state, dispatch } = useContext(Context)

    useEffect(() => {
        console.log(state);
    }, [state])

    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng
            dispatch({ marker: [lat, lng], type: 'addMarker' })

            if ('vibrate' in navigator) navigator.vibrate(100)
        }
    })

    return <></>
}

export default MapClickHandler