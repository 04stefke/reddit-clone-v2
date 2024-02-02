import { createSlice } from "@reduxjs/toolkit";

export const RedditSlice = createSlice({
    name: 'reddits',
    initialState: {
        posts: [],
        searchTerm: '',
        selectedSubreddit: 'r/pics'
    },
    reducers: {
        setPosts(state,action){
            state.posts = action.payload
        },
        setSearchRedditTerm(state,action){
            state.searchTerm = action.payload
        },
        setSelectedSubreddit(state,action){
            state.selectedSubreddit = action.payload
        }
    }
})

export const {
    setPosts,
    setSearchRedditTerm,
    setSelectedSubreddit
} = RedditSlice.actions

export default RedditSlice.reducer
