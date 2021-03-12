import React, { useContext } from 'react'
import Context from '../../context/context'

const MarkerListData = ({ marker, i }) => {

    const { dispatch } = useContext(Context)

   
    return <li>
        longitude: {marker[1]} latitude: {marker[0]}
        <button onClick={() => dispatch({ i, type: 'delMarker' })}>Supprimer</button>
    </li>

}

export default MarkerListData;