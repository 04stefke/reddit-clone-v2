import { Box, Button, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPostsData, getSubredditsData} from '../API/Api'
import {Link} from 'react-router-dom'
import { setSearchTerm, setSelectedSubreddit } from '../Reddits/RedditsSlice'


const Subreddits = () => {
    const dispatch = useDispatch()
    const subredditsData = useSelector((state) => state.subreddits.subreddits.data?.children)
    const selectedSubreddit = useSelector((state) => state.reddits.selectedSubreddit)
    
    const handleSlice = (id) => {
        dispatch(setSelectedSubreddit(id))
        dispatch(setSearchTerm(''))
    }
    
    useEffect(() => {
        dispatch(getSubredditsData())
    }, [dispatch])

    useEffect(() => {
        dispatch(getPostsData(selectedSubreddit))
    }, [dispatch, selectedSubreddit])

    const subreddit = subredditsData && subredditsData.length > 0 ? (
        subredditsData.map(item => (
            <Box key={item.data.id} sx={{padding: '30px', paddingBottom: '0', flexDirection: {sm: 'column', md: 'row'}}}>
                <Link 
                to='/'
                onClick={() => handleSlice(item.data.display_name_prefixed)}>
                    <Button sx={{bgcolor:'red', color:'white'}} >{item.data.display_name}</Button>
                </Link>
                
            </Box> 
        ))
    ) : (
        <Box sx={{color: 'white'}}>No subreddits</Box>
    )
    
    return (
        <Stack sx={{borderRight: '1px solid #3d3d3d', width: 'fit-content'}}>
            {subreddit}
        </Stack>
    )
}

export default Subreddits
