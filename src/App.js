import React from 'react'
import './App.css'
import Login from './components/user/login/Login'
import Logout from './components/user/logout/Logout'
import { useSelector } from 'react-redux'
import { selectUser } from './features/user/UserSlice'

function App() {
  // Selecting the user data from the Redux state
  const user = useSelector(selectUser)

  return (
    <div>
      {user ? <Logout /> : <Login />}
    </div>
  )
}

export default App

