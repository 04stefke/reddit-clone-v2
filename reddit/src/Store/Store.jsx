import {configureStore} from '@reduxjs/toolkit'
import SubredditsReducer from '../components/Subreddits/SubredditsSlice'

const store = configureStore({
    reducer: {
        subreddits: SubredditsReducer
    }
})

export default store