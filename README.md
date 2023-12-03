# React Redux and JWT concepts

I've created a small React application named "Login Form" that demonstrates user authentication through Redux and JSON Web Tokens (JWT). Furthermore, the application illustrates key Redux concepts as well as facilitates user login. These include State, which represents the entire state of the application like usernames, passwords, tokens, and errors. Next concept is the Store that holds the state of application "Login Form". This was accomplished using the 'configureStore' function (app/store.js) from '@reduxjs/toolkit', which manages the state, handles actions, and interacts with reducers. Reducers play a crucial role in defining how the application's state transforms in response to various actions. The ‘userReducer’ or ‘userSlice’ in 'features/user/UserSlice.js' takes charge of handling actions related to user authentication and logout in “Login Form” within my application. Another concept is Action that describes the changes in the state of the app. In my case, it was facilitated by the ‘createAsyncThunk’ (UserSlice.js) function for asynchronous tasks like user login. Finally, the Subscribe mechanism ensures that components remain synchronized with the Redux store. This is achieved through the use of the ‘userSelector’ hook, allowing components to efficiently extract and employ data from the store. In other words, the "Login Form" React application illustrates Redux's core concepts and how they can be implemented in practice.

# Screenshots of my "Login Form" application

<img width="960" alt="Screenshot 2023-12-03 031600" src="https://github.com/aterm577/101391769_comp3123_labex10/assets/126045035/8b1f606e-dde6-4cd0-9b69-7fb2558ea287">
<img width="960" alt="Screenshot 2023-12-03 031627" src="https://github.com/aterm577/101391769_comp3123_labex10/assets/126045035/109b1415-912d-430c-a16a-a739973186aa">
<img width="960" alt="Screenshot 2023-12-03 031652" src="https://github.com/aterm577/101391769_comp3123_labex10/assets/126045035/e71bee34-7225-41a3-af36-5e7247bea4fb">


