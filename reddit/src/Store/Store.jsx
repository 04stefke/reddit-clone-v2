
import {configureStore} from '@reduxjs/toolkit'
import SubredditsReducer from '../components/Subreddits/SubredditsSlice'
import RedditsReducer from '../components/Reddits/RedditsSlice'
import CommentsReducer from '../components/Comments/CommentsSlice'


const store = configureStore({
    reducer: {
        subreddits: SubredditsReducer,
        reddits: RedditsReducer,
        comments: CommentsReducer
    }
   
})

export default store

const useAppDispatch = () => store.dispatch

export { useAppDispatch }