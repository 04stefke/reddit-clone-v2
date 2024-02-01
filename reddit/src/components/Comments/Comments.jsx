import { Box, Typography, Button } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getCommentsData } from '../API/Api'
import { setButton } from './CommentsSlice'
import { useAppDispatch } from '../../Store/Store'
const Comments = () => {
    const dispatch = useAppDispatch()
    const commentsData = useSelector(state => state.comments.comments?.data?.children)
    const selectedComment = useSelector(state => state.comments.selectedComments)

    const selectedBtn = useSelector(state => state.comments.showButton)
    const commentsList = useRef()

    
    useEffect(() => {
        dispatch(getCommentsData(selectedComment))
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [dispatch, selectedComment])

    const hideComment = () => {
        if(selectedBtn === 'show comments'){
            dispatch(setButton('hide comments'))
        }
        if(selectedBtn === 'hide comments'){
            dispatch(setButton('show comments'))
        }
    }

    const commentItems = commentsData && commentsData.length > 0 ? (
        commentsData.map((item, idx) => (
            <Box key={item.data.id}
                sx={{color: 'white', 
                display:'flex', 
                justifyContent: 'center', 
                alignItems:'center', 
                flexDirection: 'column',
                borderBottom: '1px solid #3d3d3d',
                marginX: '70px',
                marginBottom:'50px'}}>
                    <Typography gutterBottom>Comment {idx + 1}</Typography>
                    <Box sx={{marginTop:'20px',marginBottom:'20px', textAlign:'center'}}>
                        <Typography>{item.data.body}</Typography>
                        <Typography sx={{marginTop:'10px'}}>Author: {item.data.author}</Typography>
                    </Box>
            </Box>
        ))
    ):(<Box>No Comments</Box>)


  return (
    <Box sx={{width: '100%', marginTop:'20px', marginLeft:'20px'}}>
        <Box>
            <Link to='/' onClick={hideComment}>
                <Button>Back to posts</Button>
            </Link>
        </Box>

        <Box ref={commentsList}>
            {commentItems}
        </Box>
    </Box>
  )
}

export default Comments
