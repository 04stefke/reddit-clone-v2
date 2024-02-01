import axios from 'axios'
import { setSubreddits } from '../Subreddits/SubredditsSlice'
import { setPosts } from '../Reddits/RedditsSlice'
import { setComments } from '../Comments/CommentsSlice'

const endpoint = 'https://www.reddit.com'
const search_endpoint = 'https://www.reddit.com/search.json?q='

const fetchPosts = async (selectedSubreddit) => {
    try{
        const res = await axios.get(`${endpoint}/${selectedSubreddit}.json`)
        return res.data
    }catch(err){
        console.log(err, 'Problem fetching posts')
    } 
}
const fetchSearchResults = async (term) => {
    try{
        const res = await axios.get(`${search_endpoint}${term}.json`)
        return res.data
    }catch(err){
        console.log(err, 'Problem fetching posts')
    } 
}

const fetchComments = async (selectedComments) => {

    try{
        const res = await axios.get(`${endpoint}/${selectedComments}.json`)
        return res.data[1]
    }catch(err){
        console.log(err, 'Problem fetching comments')
    } 
}

const fetchSubreddits = async () => {
    try{
        const res = await axios.get(`${endpoint}/subreddits.json`)
        return res.data
    }catch(err){
        console.log(err, 'Problem fetching subreddits')
    } 
}







export const getSubredditsData = () => async(dispatch) => {
    try{
        const subreddits = await fetchSubreddits()
        dispatch(setSubreddits(subreddits))
    }catch(err){
        console.log(err, 'Cannot get the subreddit data');
    }
}

export const getPostsData = (selectedSubreddit) => async(dispatch) =>{
    try{
        const postsData = await fetchPosts(selectedSubreddit)
        dispatch(setPosts(postsData))
    }catch(err){
        console.log(err, 'Cannot get the posts data')
    }
}

export const getSearchData = (searchTerm) => async(dispatch) => {
    if(searchTerm !== ''){
        try{
            const searchData = await fetchSearchResults(searchTerm)
            dispatch(setPosts(searchData))
        } catch(err){
            console.log(err, 'Cannot get the search data')
    }}
}

export const getCommentsData = (selectedComments) => async (dispatch) => {
    try{ 
        const comments = await fetchComments(selectedComments)
        dispatch(setComments(comments))
    } catch(err){
        console.log(err, 'Problem fetching comments')
    }
}
