import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet'


const Localisation = () => {

    const map = useMap()

    useEffect(() => {

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                map.setView([latitude, longitude])
            })
        }
    }, [])

    return <></>
}

export default Localisation