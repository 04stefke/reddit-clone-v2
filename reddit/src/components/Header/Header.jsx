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
    padding:' 15px 30px', 
    bgcolor:'#F4FDFF ', 
    color:'black', 
    }}>
        <Box ><img width={'100px'} src="/logo.png" alt="" /></Box>
        <Stack direction='row' alignItems={'center'}>
            <Input 
              placeholder='Search...' 
              className="search-bar" 
              sx={{color: 'black', padding: '10px 25px'}} 
              onChange={onSearchChange}
              onKeyDown={enter}/>
            <Button 
              sx={{bgcolor:'#FF4500'}} 
              onClick={searchReddit}
            >
              <box-icon name='search-alt'sx={{color: '#fff'}}></box-icon>
            </Button>
        </Stack>
        <Box>Made by. Stefan</Box>
    </Box>
  )
}

export default Header
