# React Redux and JWT concepts

I've created a small React application named "Login Form" that demonstrates user authentication through Redux and JSON Web Tokens (JWT). Furthermore, the application illustrates key Redux concepts as well as facilitates user login. These include State, which represents the entire state of the application like usernames, passwords, tokens, and errors. Next concept is the Store that holds the state of application "Login Form". This was accomplished using the 'configureStore' function (app/store.js) from '@reduxjs/toolkit', which manages the state, handles actions, and interacts with reducers. Reducers play a crucial role in defining how the application's state transforms in response to various actions. The ‘userReducer’ or ‘userSlice’ in 'features/user/UserSlice.js' takes charge of handling actions related to user authentication and logout in “Login Form” within my application. Another concept is Action that describes the changes in the state of the app. In my case, it was facilitated by the ‘createAsyncThunk’ (UserSlice.js) function for asynchronous tasks like user login. Finally, the Subscribe mechanism ensures that components remain synchronized with the Redux store. This is achieved through the use of the ‘userSelector’ hook, allowing components to efficiently extract and employ data from the store. In other words, the "Login Form" React application illustrates Redux's core concepts and how they can be implemented in practice.

# Screenshots of my "Login Form" application



