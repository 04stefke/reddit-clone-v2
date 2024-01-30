import {configureStore} from '@reduxjs/toolkit'
import SubredditsReducer from '../components/Subreddits/SubredditsSlice'
import RedditsReducer from '../components/Reddits/RedditsSlice'
const store = configureStore({
    reducer: {
        subreddits: SubredditsReducer,
        reddits: RedditsReducer
    }
})

export default store