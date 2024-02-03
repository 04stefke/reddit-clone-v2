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
    console.log(selectedBtn)
    const commentsList = useRef()

    
    useEffect(() => {
        dispatch(getCommentsData(selectedComment))
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
                sx={{color: 'black', 
                display:'flex', 
                justifyContent: 'center', 
                alignItems:'center', 
                flexDirection: 'column',
                borderBottom: '1px solid #3d3d3d',
                marginX: '70px',
                marginBottom:'50px',
                bgcolor:''}}>
                    <Typography gutterBottom>Comment No {idx + 1}</Typography>
                    <Box sx={{marginTop:'20px',marginBottom:'20px', textAlign:'center'}}>
                        <Typography>{item.data.body}</Typography>
                        <Typography sx={{marginTop:'10px'}}>Author: {item.data.author}</Typography>
                    </Box>
            </Box>
        ))
    ):(<Box>No Comments</Box>)


  return (
    <Box sx={{width: '80vw', marginTop:'20px', marginLeft:'20px', overflow: 'auto', height: '1660px', bgcolor: '#F4FDFF'}}>
        <Box sx={{padding: '20px'}}>
            <Link to='/' onClick={hideComment}>
                <Button sx={{bgcolor:'#FF4500', color: 'white'}}>Back to posts</Button>
            </Link>
        </Box>

        <Box ref={commentsList}>
            {commentItems}
        </Box>
    </Box>
  )
}

export default Comments
