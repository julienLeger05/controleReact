import React, { useContext, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import Context from '../../context/context'
import CarteClick from './CarteClick'
import LocationHandler from './Localisation'



L.Icon.Default.imagePath = 'img/' 

const Carte = () => {

    const { state } = useContext(Context)

    return (
    <MapContainer center={[44.5596, 6.0798]}zoom={13}  className="map">
        <TileLayer url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'/>

        <CarteClick />
        <LocationHandler />
        {state.markers.map((position, i) => <Marker position={position} key={i} />)}
    </MapContainer>)
}

export default Carte