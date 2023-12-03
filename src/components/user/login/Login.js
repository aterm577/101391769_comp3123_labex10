import React, { useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../features/user/UserSlice'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Redux hooks to dispatch actions and select data from the state
    const dispatch = useDispatch()
    const error = useSelector((state) => state.user.error)

    // Function to handle the login form 
    const handleLogin = async (e) => {
        e.preventDefault()
        await dispatch(login({ username, password }))
    }

    return (
        <div className='login'>
        <form className='login_form' onSubmit={handleLogin}>
            <h1>Login Form</h1>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className='login_btn'>LOGIN</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default Login