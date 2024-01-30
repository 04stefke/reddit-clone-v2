import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Box } from '@mui/material'
import Subreddits from './components/Subreddits/Subreddits'

function App() {

  return (
    <Box sx={{bgcolor: '#000000'}}>
      <Header/>
      <Subreddits/>
    </Box>
  )
}

export default App
