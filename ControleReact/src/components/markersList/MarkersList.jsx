import React, { useContext } from 'react'
import Context from "../../context/context"
import MarkerListItem from "./MarkersListItem"


const MarkersList = () => {

    const { state } = useContext(Context)

    return state.markers.length > 0 ? (
        <div>
            <h4>Vos marqueurs</h4>
            <ul className="marker-list">
                {state.markers.map((marker, i) => <MarkerListItem key={i} index={i} marker={marker} />)}
            </ul>
        </div>
    ) :
        <p>Pas encore de marqueurs</p>
}

export default MarkersList