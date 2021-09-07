import React from 'react'
// import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'


const Home = () => {
    // const loggedIn = useSelector(state=>state.loggedIn)

    return (
        <div>
        {
            <Sidebar/>
            // loggedIn ? 
            // <Sidebar/>
            // :
            // <Sidebar/>
            // <h1>Log In First!</h1>
            
        }        
        </div>
    )
}

export default Home
