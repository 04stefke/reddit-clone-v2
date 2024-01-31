import React, { useEffect, useRef, useState } from 'react'
import {Box} from '@mui/system'
import {Input , Button, Stack} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchData } from '../API/Api'
import {setSearchRedditTerm} from '../Reddits/RedditsSlice'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const serchItem = useSelector(state => state.reddits.searchTerm)
  const dispatch = useDispatch()
  const linkRef = useRef()
  const onSearchChange = e => setSearchTerm(e.target.value)

  const searchReddit = () => {
    dispatch(setSearchRedditTerm(searchTerm))
    setSearchTerm('')
  }

  const enter = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault()
      searchReddit()
      if(linkRef.current){
        linkRef.current.click()
      }
    }
  }

  useEffect(()=>{
    dispatch(getSearchData(serchItem))
  }, [dispatch, serchItem])

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
            <Input 
              placeholder='Search...' 
              className="search-bar" 
              sx={{color: '#ffffff'}} 
              onChange={onSearchChange}
              onKeyDown={enter}/>
            <Button 
              sx={{bgcolor:'red'}} 
              onClick={searchReddit}
            >
              <i class='bx bx-search-alt' style={{color: '#ffffff'}}></i>
            </Button>
        </Stack>
        <Box>Made by. Stefan</Box>
    </Box>
  )
}

export default Header
