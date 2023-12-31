import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,

    token: null,
    isLoggedIn: false,

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action) {
            state.user = action.payload.user
            state.token = action.payload.Authorization.token
            state.isLoggedIn = true
        },
        logOut(state) {
            state.user = null
            state.token = null
        },
        isCandidate(state) {
            if (state.user.role_id === 2) {
                return true
            }
            return false
        },
        isElecteur(state) {
            if (state.user.role_id === 3) {
                return true
            }
            return false
        }

    }
})
export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
export const curentUser = state => state.auth.user
export const token = state => state.auth.token
export const isLoggedIn = state => state.auth.isLoggedIn