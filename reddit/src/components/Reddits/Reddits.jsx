import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getPostsData } from '../API/Api'
import { setButton, setSelectedComment } from '../Comments/CommentsSlice'

const Reddits = () => {
    const dispatch = useDispatch()
    
    const postData = useSelector(state => state.reddits.posts?.data?.children)
    const searchTerm = useSelector(state => state.reddits.searchTerm)
    const commentsBtn = useSelector(state => state.comments.showButton)
    const selectedSubreddit = useSelector(state => state.reddits.selectedSubreddit)


    var handleSelectComment = (comment) => {
        if(commentsBtn === 'show comments'){
            dispatch(setSelectedComment(comment))
            dispatch(setButton('hide comments'))
        } 
        if(commentsBtn === 'hide comments'){
            dispatch(setSelectedComment(comment))
            dispatch(setButton('show comments'))
        }
    }
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
                        <Button sx={{bgcolor:'red', color:'white'}} onClick={() => handleSelectComment(item.data.permalink)} >Comments</Button>
                    </Link>
                </Box>
        </Box>
        ))
    ) : ( <Box color={'white'}>No Posts</Box>)

    
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
