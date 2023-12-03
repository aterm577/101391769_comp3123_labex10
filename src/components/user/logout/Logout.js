import React from 'react'
import './Logout.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../../features/user/UserSlice'

const Logout = () => {

     // Selecting the user data from the Redux state
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    // Function to handle the logout action
    const handleLogout = (e) =>{
        e.preventDefault()
        dispatch(logout())
    }

    return(
        <div>
            <h1>Welcome <span>{user?.username}</span></h1>
            <button className = 'logout_btn' onClick={(e) => handleLogout(e)}>LOGOUT</button>
        </div>
    )
}

export default Logout