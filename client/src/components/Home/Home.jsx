import React from 'react'
import MainSection from '../MainSection/MainSection'
// import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'


const Home = () => {
    // const loggedIn = useSelector(state=>state.loggedIn)

    return (
        <div>

        <Sidebar/>
        <MainSection/>
                 
        </div>
    )
}

export default Home
