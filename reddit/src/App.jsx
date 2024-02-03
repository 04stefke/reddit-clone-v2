
import './App.css'
import Header from './components/Header/Header'
import { Box } from '@mui/material'
import Subreddits from './components/Subreddits/Subreddits'
import Reddits from './components/Reddits/Reddits'
import { Routes, Route } from 'react-router-dom'
import Comments from './components/Comments/Comments'
import Footer from './components/Footer/Footer'
import loadingIcon from './assets/loading.gif'
import { useSelector } from 'react-redux'
function App() {
  const loading = useSelector(state => state.reddits.loading)
  return (
    <Box sx={{bgcolor: '#edebeb', overflow: 'auto'}}>
      <Header/>
      {loading && (
        <div className='overlay'>
          <div className='centerGif'>
            <img src={loadingIcon} alt="" />
          </div>
        </div>
      )}
      <Box sx={{display: 'flex'}}>
        <Subreddits/>
        <Routes>
          <Route path='/' element={<Reddits/>}/>
          <Route path='/Comments' element={<Comments/>}/>
        </Routes>

      </Box>
    <Footer/>
    </Box>
  )
}

export default App
