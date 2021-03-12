import React, { useContext, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import Context from '../../context/context'
import MapClickHandler from './MapClickHandler'
import LocationHandler from './LocationHandler'



L.Icon.Default.imagePath = 'img/' // fait marcher les icones de marqueurs

const Map = () => {

    const { state } = useContext(Context)

    return <MapContainer
        center={[44.5596, 6.0798]}
        zoom={13}
        doubleClickZoom={false}
        scrollWheelZoom={true}
        className="map"
    >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapClickHandler />
        <LocationHandler />
        {state.markers.map((position, i) => <Marker position={position} key={i} />)}
    </MapContainer>
}

export default Map