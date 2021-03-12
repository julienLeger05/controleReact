import React, { useContext } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import Context from '../../context/context'
import CarteClick from './CarteClick'
import Localisation from './Localisation'



L.Icon.Default.imagePath = 'img/' 

const Carte = () => {

    const { state } = useContext(Context)

    return (
    <MapContainer center={[19.6, -99.5]}zoom={13}  className="map">
        <TileLayer url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'/>

        <CarteClick />
        <Localisation />
        {state.markers.map((position, i) => <Marker position={position} key={i} />)}
    </MapContainer>)
}

export default Carte