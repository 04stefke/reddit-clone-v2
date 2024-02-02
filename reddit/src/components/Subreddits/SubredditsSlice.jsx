import {createSlice} from '@reduxjs/toolkit'

export const SubredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: []
    }, 
    reducers: {
        setSubreddits(state, action){
            state.subreddits = action.payload
        }
    }
})

export const {setSubreddits} = SubredditsSlice.actions
export default SubredditsSlice.reducer