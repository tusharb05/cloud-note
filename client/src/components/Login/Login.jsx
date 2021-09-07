import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setLoginTrue, setLoginDetails } from '../../actions/login'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogin = async (e)=>{
        e.preventDefault()
        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status === 'last step left!'){
                dispatch(setLoginTrue())
                dispatch(setLoginDetails({...data._doc}))
                history.push('/')
            }
        })
    }

    return (
        <div>
            <form onSubmit={e=>handleLogin(e)}>
                <label htmlFor="">Username</label>
                <input 
                    type="text"
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                />

                <label htmlFor="">Email</label>
                <input 
                    type="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)} 
                />

                <label htmlFor="">Password</label>
                <input 
                    type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}/>

                <button>Add</button>
            </form>
            <Link to="/register">Haven't registered yet?</Link>
        </div>
    )
}

export default Login
