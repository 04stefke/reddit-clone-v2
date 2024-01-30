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
    }}>
        <Box>Logo</Box>
        <Stack direction='row' alignItems={'center'}>
            <Input placeholder='Search...' className="search-bar" sx={{color: '#ffffff'}} />
            <Button sx={{bgcolor:'red'}} ><i class='bx bx-search-alt' style={{color: '#ffffff'}}></i></Button>
        </Stack>
        <Box>Made by. Stefan</Box>
    </Box>
  )
}

export default Header
