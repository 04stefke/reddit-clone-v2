import React from 'react'
import {Box} from '@mui/system'
import {Input , Button, Stack} from '@mui/material'

const Header = () => {
  return (
    <Box 
    sx={{display: 'flex', 
    justifyContent:'space-between', 
    alignItems: 'center', 
    padding:' 25px 30px', 
    bgcolor:'#000000', 
    color:'#ffffff', 
    borderBottom:'0.5px solid #3d3d3d'}}>
        <Box>Logo</Box>
        <Stack direction='row' alignItems={'center'}>
            <Input placeholder='Search...' className="search-bar" style={{color: '#ffffff'}} />
            <Button><i class='bx bx-search-alt' style={{color: '#ffffff'}}></i></Button>
        </Stack>
        <Box>Made by. Stefan</Box>
    </Box>
  )
}

export default Header
