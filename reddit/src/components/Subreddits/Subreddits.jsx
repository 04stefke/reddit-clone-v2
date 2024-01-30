import { Box, Button, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSubredditsData} from '../API/Api'
const Subreddits = () => {
    const dispatch = useDispatch()
    const subredditsData = useSelector((state) => state.subreddits.subreddits.data?.children)

    useEffect(() => {
        dispatch(getSubredditsData())
    }, [dispatch])

    const subreddit = subredditsData && subredditsData.length > 0 ? (
        subredditsData.map(item => (
            <Box key={item.data.id} sx={{padding: '30px', paddingBottom: '0', flexDirection: {sm: 'column', md: 'row'}}}>
                <Button sx={{bgcolor:'red', color:'white'}} >{item.data.display_name}</Button>
            </Box> 
        ))
    ) : (
        <Box>No subreddits</Box>
    )

    // const subreddit = (
    //    
    // )

    return (
        <Stack sx={{borderRight: '1px solid #3d3d3d', width: 'fit-content'}}>
            {subreddit}
        </Stack>
    )
}

export default Subreddits
