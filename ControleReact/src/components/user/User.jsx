import React, { useContext } from 'react'
import Context from '../../context/context'


const User = () => {

    const { state } = useContext(Context)

    return <div>
        <h2>Prenom:{state.user.Prenom} Nom:{state.user.Nom}Mail :{state.user.Mail}</h2>
        
    </div>
}

export default User;