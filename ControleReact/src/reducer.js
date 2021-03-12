const reducer = (state, action) => {
    
    switch(action.type) {

        case 'addMarker' : 
            return { ...state, markers: [...(state.markers || []), action.marker]}

        case 'delMarker' :
            const markers = [...state.markers]
            markers.splice(action.index, 1)
            return { ...state, markers: [...( markers || [])] }

        case 'user' :
            const user = {...state.user} || {}

            user.Prenom = action.user.Prenom
            user.Nom = action.user.Nom
            user.Mail = action.user.Mail

            return {...state, user }

        default : 
            return {...state}
    }
}

export default reducer