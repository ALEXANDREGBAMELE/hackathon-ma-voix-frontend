// postSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getAllPosts } from '../app/publicApi/public';

const initialState = {
    posts: [],
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost(state, action) {
            state.posts.push(action.payload);
        },
        incrementLikes(state, action) {
            const { id } = action.payload;
            const existingPost = state.posts.find((post) => post.id == id);
            if (existingPost) {
                existingPost.likes++;
            }
        },
        decrementLikes(state, action) {
            const { id } = action.payload;
            const existingPost = state.posts.find((post) => post.id == id);
            if (existingPost) {
                existingPost.likes--;
            }
        },
        addLikedPost(state, action) {
            const { id } = action.payload;
            const existingPost = state.posts.find((post) => post.id == id);
            if (existingPost) {
                existingPost.liked = true;
            }
        }

    },

});

export const { addPost, incrementLikes, decrementLikes } = postSlice.actions;
export default postSlice.reducer;