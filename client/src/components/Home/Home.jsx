import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const loggedIn = useSelector(state=>state.loggedIn)

    return (
        <div>
        {
            loggedIn ? 
            <h1>Logged In!</h1>
            :
            <h1>Log In First!</h1>
        }        
        </div>
    )
}

export default Home
