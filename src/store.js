import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./app/api/apiSlice";
import authReducer from "./features/auth/authSlice";
import postSlice from "./features/postSlice";




export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        post: postSlice,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),

})