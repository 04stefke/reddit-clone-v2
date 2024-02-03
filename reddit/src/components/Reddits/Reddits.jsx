import { Box, Button, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { setButton, setSelectedComment } from '../Comments/CommentsSlice'
import {useAppDispatch} from '../../Store/Store'

const Reddits = () => {
    const dispatch = useAppDispatch()
    const postData = useSelector(state => state.reddits.posts?.data?.children)
    const searchTerm = useSelector(state => state.reddits.searchTerm)
    const commentsBtn = useSelector((state) => state.comments.showButton)
    const selectedSubreddit = useSelector(state => state.reddits.selectedSubreddit)
    const postList = useRef()


    const handleSelectComment = (comment) => {
        if(commentsBtn === 'show comments'){
            console.log(commentsBtn);
            dispatch(setSelectedComment(comment))
            dispatch(setButton('hide comments'))
            
        } 
        if(commentsBtn === 'hide comments'){
            console.log(commentsBtn);
            dispatch(setSelectedComment(comment))
            dispatch(setButton('show comments'))
        }
    }

    const backToTop = () => {
        postList.current.scroll(0,0)
    }


    const postItem = postData && postData.map((item) => (
        <Box key={item.data.id}
            sx={{bgcolor: 'light-blue',
            display:'flex', 
            alignItems:'center', 
            justifyContent:'center', 
            flexDirection:'column', 
            borderBottom: '1px solid #3d3d3d',
            marginBottom:'100px',
            marginX: '70px'}}>

                <Typography 
                    variant='h5' 
                    component='h2' 
                    sx={{marginLeft: '20px',marginBottom: '20px', fontWeight:'bold'}}>
                        {item.data.title}
                </Typography>

                <Typography 
                    variant='p' 
                    gutterBottom>
                        {item.data.selftext}
                </Typography>

                <Box 
                    sx={{marginBottom: '10px'}}>
                        <img src={item.data.url} alt="" width={'500px'}/>
                </Box>

                <Typography 
                    variant='p' 
                    gutterBottom>
                        Author: {item.data.author}
                </Typography>

                <Box 
                    sx={{marginBottom: '30px', display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <Link to='/Comments'>
                            <Button 
                                sx={{bgcolor:'#FF4500', color:'white'}} 
                                onClick={() => handleSelectComment(item.data.permalink)}>
                                    Check the Comments
                            </Button>
                        </Link>
                        <Button sx={{bgcolor:'#FF4500', color:'white', scrollBehavior:'smooth'}} onClick={backToTop}>Back To Top</Button>
                </Box>

        </Box>
        ))
  

    
  return (
    <Box sx={{color: 'black', width:'auto', margin:'20px 50px', }}>
        {searchTerm !== '' && (
            <Typography>SearchTerm: {searchTerm}</Typography>
        )}
        {searchTerm === '' && (
            <Typography>Subreddit: {selectedSubreddit}</Typography>
        )}
        
            <Box ref={postList} height={'1660px'} width={'80vw'} sx={{overflow: 'auto', bgcolor: '#F4FDFF '}}>
                {postItem}
            </Box>
    </Box>
  )
}

export default Reddits
