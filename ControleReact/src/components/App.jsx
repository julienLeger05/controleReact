import './../css/App.css'
import React from 'react'
import Map from './map/Map'
import Context from "../context/context"
import { useReducer } from 'react'
import reducer from './../reducer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom"
import MarkersList from './markersList/MarkersList'
import UserForm from "./user/UserForm";
import User from './user/User'

const App = () => {

    const [state, dispatch] = useReducer(reducer, { markers: [] })

    return <Context.Provider value={{ state, dispatch }}>
        {state.user && <User />}
        <Router>
            <Switch>
                <Route path="/markers">
                    <Link to="/">Accueil</Link>
                    <br />
                    <MarkersList />
                    <UserForm />
                </Route>

                <Route path="/">
                    <Link to="/markers">Marqueurs</Link>
                    <Map />
                </Route>
            </Switch>
        </Router>
    </Context.Provider>
}

export default App
