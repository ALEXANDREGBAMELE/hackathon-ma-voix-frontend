import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    candidats: [],
    loading: false,
    error: null
}
const candidatsSlice = createSlice({
    name: 'candidats',
    initialState,
    reducers: {
        getCandidatsStart(state) {
            state.loading = true
        },
        getCandidatsSuccess(state, action) {
            state.candidats = action.payload
            state.loading = false
            state.error = null
        },
        getCandidatsFailure(state, action) {
            state.loading = false
            state.error = action.payload
        }
    }
})