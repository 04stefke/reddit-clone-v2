import { createSlice } from "@reduxjs/toolkit";

export const CommentsSLice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        selectedComments: '',
        selectedTitle: '',
        showButton: 'show comments'
    },
    reducers:{
        setComments(state, action){
            state.comments = action.payload
        },
        setSelectedComment(state, action){
            state.selectedComments = action.payload
        },
        setSelectedTitle(state, action){
            state.selectedTitle = action.payload
        },
        setButton(action, state){
            state.showButton = action.payload
        }
    }
})

export const {
    setComments,
    setSelectedComment,
    setSelectedTitle,
    setButton
} = CommentsSLice.actions

export default CommentsSLice.reducer