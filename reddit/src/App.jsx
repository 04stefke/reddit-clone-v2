import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Box } from '@mui/material'
import Subreddits from './components/Subreddits/Subreddits'
import Reddits from './components/Reddits/Reddits'

function App() {

  return (
    <Box sx={{bgcolor: '#000000'}}>
      <Header/>
      <Box sx={{display: 'flex'}}>
        <Subreddits/>
        <Reddits/>
      </Box>

    </Box>
  )
}

export default App
