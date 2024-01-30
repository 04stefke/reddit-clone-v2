import { createSlice } from "@reduxjs/toolkit";

export const RedditSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        searchTerm: '',
        selectedSubreddit: 'r/pics'
    },
    reducers: {
        setPosts(state,action){
            state.posts = action.payload
        },
        setSearchTerm(state,action){
            state.searchTerm = action.payload
        },
        setSelectedSubreddit(state,action){
            state.selectedSubreddit = action.payload
        }
    }
})

export const {
    setPosts,
    setSearchTerm,
    setSelectedSubreddit
} = RedditSlice.actions

export default RedditSlice.reducer
