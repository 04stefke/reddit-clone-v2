import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Comments = () => {

    const commentItems = (
        <Box sx={{color: 'white', 
        display:'flex', 
        justifyContent: 'center', 
        alignItems:'center', 
        flexDirection: 'column',
        borderBottom: '1px solid #3d3d3d',
        marginX: '70px',
        marginBottom:'50px'}}>
            <Typography gutterBottom>Comment index</Typography>
            <Box sx={{marginTop:'20px',marginBottom:'20px'}}>
                <Typography>Comment</Typography>
                <Typography sx={{marginTop:'10px'}}>Author</Typography>
            </Box>
        </Box>
    )
  return (
    <Box sx={{width: '100%', marginTop:'20px', marginLeft:'20px'}}>
        <Box>
            <Link to='/'>
                <Button>Back to posts</Button>
            </Link>
        </Box>

        <Box>
            {commentItems}
            {commentItems}
            {commentItems}
            {commentItems}
            {commentItems}
            
        </Box>
    </Box>
  )
}

export default Comments
