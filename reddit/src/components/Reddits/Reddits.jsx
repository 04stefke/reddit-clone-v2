import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Reddits = () => {

    const postItem = (
        <Box 
        sx={{bgcolor: 'light-blue',
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center', 
        flexDirection:'column', 
        borderBottom: '1px solid #3d3d3d',
        marginBottom:'100px',
        marginX: '70px'}}>
            
            <Typography variant='h5' gutterBottom>Selftext</Typography>
            <Box sx={{marginBottom: '10px'}}><img src="" alt="" width={'100%'}/></Box>
            <Typography variant='p' gutterBottom>Author</Typography>
            <Box sx={{marginBottom: '30px'}}>
                <Link to='/Comments'><Button sx={{bgcolor:'red', color:'white'}}>Comments</Button></Link>
                
            </Box>
        </Box>
    )
  return (
    <Box sx={{color: 'white', width:'100%', marginTop:'70px'}}>
        <Typography variant='h5' component='h2' sx={{marginLeft: '20px',marginBottom: '20px', fontWeight:'bold'}}>Post Title: </Typography>
        {postItem}
        {postItem}
        {postItem}
        {postItem}
        {postItem}
    </Box>
  )
}

export default Reddits
