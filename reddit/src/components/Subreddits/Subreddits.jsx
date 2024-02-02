import { Box, Button, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {getPostsData, getSubredditsData} from '../API/Api'
import {Link} from 'react-router-dom'
import { setSearchRedditTerm, setSelectedSubreddit } from '../Reddits/RedditsSlice'
import {setButton} from '../Comments/CommentsSlice'
import {useAppDispatch} from '../../Store/Store'
const Subreddits = () => {
    const dispatch = useAppDispatch()
    const subredditsData = useSelector((state) => state.subreddits.subreddits?.data?.children)
    const selectedSubreddit = useSelector((state) => state.reddits.selectedSubreddit)
    const commentsButton = useSelector((state) => state.comments.showButton)

    const handleSlice = (id) => {
        dispatch(setSelectedSubreddit(id))
        dispatch(setSearchRedditTerm(''))
        if (commentsButton === 'hide comments') {
            dispatch(setButton('show comments'));
        }
    }
    
    useEffect(() => {
        dispatch(getSubredditsData())
    }, [dispatch])

    useEffect(() => {
        dispatch(getPostsData(selectedSubreddit))
    }, [dispatch, selectedSubreddit])

    const subreddit = subredditsData && subredditsData.map(item => (
            <Box 
                key={item.data.display_name} 
                sx={{padding: '30px', 
                    paddingBottom: '0', 
                    flexDirection: {sm: 'column', md: 'row'}}}>
                    <Link 
                        to='/'
                        onClick={() => handleSlice(item.data.display_name_prefixed)}>
                        <Button sx={{bgcolor:'red', color:'white'}}>{item.data.display_name}</Button>
                    </Link>
            </Box> 
        ))
     
    return (
        <Stack sx={{borderRight: '1px solid #3d3d3d', width: 'fit-content'}}>
            {subreddit}
        </Stack>
    )
}

export default Subreddits
