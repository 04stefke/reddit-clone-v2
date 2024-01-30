import React from 'react'
import {Box} from '@mui/system'
import {Input , Button, Stack} from '@mui/material'

const Header = () => {
  return (
    <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', padding:' 10px 5%', bgcolor:'#dda15e'}}>
        <Box>Logo</Box>
        <Stack direction='row' alignItems={'center'}>
            <Input className="search-bar" color='secondary' style={{color: '#283618'}} />
            <Button><i class='bx bx-search-alt' style={{color: '#283618'}}></i></Button>
        </Stack>
        <Box>Made by. Stefan</Box>
    </Box>
  )
}

export default Header
