// postSlice.js
import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        likedPosts: [],

    },
    reducers: {
        getAllpost(state, action) {
            state.posts = action.payload;
        },
        likedPost(state, action) {
            const postId = action.payload;
            state.likedPosts.push(postId);
        },
    },
});

export const { addPost, likePost, commentPost } = postSlice.actions;
export default postSlice.reducer;