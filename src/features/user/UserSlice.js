import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Imitating API call to authenticate user
const loginApi = async ({ username, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (username === 'aterm577' && password === 'password') {
        return "ca49de7492a0eebe542845e9611c2455a9f3bde09d19bb2bde1b166a16784a23c1d1e5244336d1f54075b9da2376fd00cb65f0740883c75705c724d325755639"
    } else {
        throw new Error('Invalid credentials')
    }
}

// Async thunk for handling the login action
export const login = createAsyncThunk('user/login', async ({ username, password }, { rejectWithValue }) => {
    try {
        const jwtToken = await loginApi({ username, password })
        return { user: { username }, token: jwtToken }
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
        error: null,
    },
    reducers: {
        logout: (state) => {
        state.user = null
        state.token = null
        state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.error = null
        })
        .addCase(login.rejected, (state, action) => {
            state.user = null
            state.token = null
            state.error = action.payload
        })
    },
})

export const { logout } = userSlice.actions
export const selectUser = (state) => state.user.user
export const selectToken = (state) => state.user.token

export default userSlice.reducer
