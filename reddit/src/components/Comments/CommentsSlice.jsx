import { createSlice } from "@reduxjs/toolkit";

export const CommentsSLice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        selectedComments: '',
        showButton: 'show comments'
    },
    reducers:{
        setComments(state, action){
            state.comments = action.payload
        },
        setSelectedComment(state, action){
            state.selectedComments = action.payload
        },
        setButton(action, state){
            state.showButton = action.payload
        }
    }
})

export const {
    setComments,
    setSelectedComment,
    setButton
} = CommentsSLice.actions

export default CommentsSLice.reducer