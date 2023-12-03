import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/UserSlice'

export default configureStore({
    reducer: {
        // Assigning the userReducer to the 'user' slice in the Redux store
        user: userReducer,
    }
})