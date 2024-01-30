import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Box } from '@mui/material'
import Subreddits from './components/Subreddits/Subreddits'
import Reddits from './components/Reddits/Reddits'
import { Routes, Route } from 'react-router-dom'
import Comments from './components/Comments/Comments'

function App() {

  return (
    <Box sx={{bgcolor: '#000000'}}>
      <Header/>
      <Box sx={{display: 'flex'}}>
        <Subreddits/>
        <Routes>
          <Route path='/' element={<Reddits/>}/>
          <Route path='/Comments' element={<Comments/>}/>
        </Routes>
        
      </Box>

    </Box>
  )
}

export default App
