import { Box, Button, Stack } from '@mui/material'
import React from 'react'

const Subreddits = () => {
    const subreddit = (
        <Box sx={{padding: '30px', paddingBottom: '10px', flexDirection: {sm: 'column', md: 'row'}}}>
            <Button variant="outlined" >Subreddits</Button>
        </Box>
    )

    return (
        <Stack sx={{borderRight: '1px solid #3d3d3d', width: 'fit-content'}}>
            {subreddit}
            {subreddit}
            {subreddit}
            {subreddit}
            {subreddit}
            {subreddit}
            {subreddit}
            {subreddit}
            {subreddit}
            {subreddit}
            {subreddit}

        </Stack>
    )
}

export default Subreddits
