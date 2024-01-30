import axios from 'axios'

const endpoint = 'https://www.reddit.com'
const search_endpoint = 'https://www.reddit.com/search.json?q='

export const fetchPosts = async (selectedSubreddits) => {
    try{
        const res = await axios.get(`${endpoint}/${selectedSubreddits}.json`)
        return res.data
    }catch(err){
        console.log(err, 'Problem fetching posts')
    } 
}
export const fetchSearchResults = async (term) => {
    try{
        const res = await axios.get(`${search_endpoint}${term}.json`)
        return res.data
    }catch(err){
        console.log(err, 'Problem fetching posts')
    } 
}
export const fetchComments = async (selectedComments) => {

    try{
        const res = await axios.get(`${endpoint}/${selectedComments}.json`)
        return res.data[1]
    }catch(err){
        console.log(err, 'Problem fetching comments')
    } 
}

export const fetchSubreddits = async () => {
    try{
        const res = await axios.get(`${endpoint}/subreddits.json`)
        return res.data
    }catch(err){
        console.log(err, 'Problem fetching subreddits')
    } 
}
