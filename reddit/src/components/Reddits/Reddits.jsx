import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getPostsData } from '../API/Api'

const Reddits = () => {
    const selectedSubreddit = useSelector(state => state.reddits.selectedSubreddit)
    const postData = useSelector(state => state.reddits.posts?.data?.children)
    const searchTerm = useSelector(state => state.reddits.searchTerm)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsData(selectedSubreddit))
    }, [dispatch, selectedSubreddit])


    const postItem = postData && postData.length > 0 ? (
        postData.map((item) => (
        <Box key={item.data.id}
            sx={{bgcolor: 'light-blue',
            display:'flex', 
            alignItems:'center', 
            justifyContent:'center', 
            flexDirection:'column', 
            borderBottom: '1px solid #3d3d3d',
            marginBottom:'100px',
            marginX: '70px'}}>
                <Typography variant='h5' component='h2' sx={{marginLeft: '20px',marginBottom: '20px', fontWeight:'bold'}}>Post Title: {item.data.title}</Typography>
                <Typography variant='h5' gutterBottom>{item.data.selftext}</Typography>
                <Box sx={{marginBottom: '10px'}}><img src={item.data.url} alt="" width={'100%'}/></Box>
                <Typography variant='p' gutterBottom>Author: {item.data.author}</Typography>
                <Box sx={{marginBottom: '30px'}}>
                    <Link to='/Comments'>
                        <Button sx={{bgcolor:'red', color:'white'}}>Comments</Button>
                    </Link>
                </Box>
        </Box>
        ))
    ) : ( <Box>No Posts</Box>)

    
  return (
    <Box sx={{color: 'white', width:'100%', marginTop:'70px'}}>
        {searchTerm !== '' && (
            <Typography>SearchTerm: {searchTerm}</Typography>
        )}
        {searchTerm === '' && (
            <Typography>Subreddit: {selectedSubreddit}</Typography>
        )}
        
        {postItem}

    </Box>
  )
}

export default Reddits
