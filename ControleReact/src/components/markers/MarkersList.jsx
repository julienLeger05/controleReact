import React, { useContext } from 'react'
import Context from "../../context/context"
import MarkerListItem from "./MarkersListData"


const MarkersList = () => {

    const { state } = useContext(Context)

    return( state.markers.length > 0 ? (
        <div>
            
            <ul>
                {state.markers.map((marker, i) => <MarkerListItem key={i} index={i} marker={marker} />)}
            </ul>
        </div>
    ) :
        <div></div>)
}

export default MarkersList