import React, { useContext } from 'react'
import Context from '../../context/context'

const MarkerListItem = ({ marker, index }) => {

    const { dispatch } = useContext(Context)

    console.log(marker)
    return <li>
        latitude: {marker[0]}, longitude: {marker[1]}
        <button onClick={() => dispatch({ index, type: 'delMarker' })}>Supprimer</button>
    </li>

}

export default MarkerListItem;