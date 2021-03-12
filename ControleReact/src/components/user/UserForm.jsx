import React, { useContext, useState, useEffect } from 'react'
import Context from '../../context/context'

const UserForm = () => {

    const { state, dispatch } = useContext(Context)

    const [Nom, setNom] = useState('')
    const [Prenom, setPrenom] = useState('')
    const [Mail, setMail] = useState('')


    useEffect(() => {
        console.log(state)
    }, [state])

    const Submit = (e) => {
        e.preventDefault()
        const values = e.target.elements
        const Nom = values.namedItem('Nom').value
        const Prenom = values.namedItem('Prenom').value
        const Mail = values.namedItem('Mail').value
        dispatch({ user: { Nom, Prenom, Mail }, type: 'user' })
    }

    return <form onSubmit={Submit}>
        
        
          <label>Prénom</label>
        <input type="text" id="Prenom" name="Prenom" onChange={e => setPrenom(e.target.value)} />

        <br />
        <label>Nom</label>
        <input type="text" id="Nom" name="Nom" onChange={e => setNom(e.target.value)} />

        <br />

      

        <label >Email</label>
        <input type="Mail" id="Mail" name="Mail" onChange={e => setMail(e.target.value)} />

        <input type="submit" value="Save" />
    </form>
}

export default UserForm