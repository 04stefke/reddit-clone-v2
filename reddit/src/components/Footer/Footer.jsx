import React from 'react'
import {Box, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
return (
    <Box sx={{width: '100%', 
            height: '100px', 
            bgcolor:'#F4FDFF', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'column'}}>
        <Typography paddingBottom={'10px'}>Stefan Jovanovic</Typography>
        <Box>
            <a href="https://www.instagram.com/stefke.9.9/" ><InstagramIcon></InstagramIcon></a>
            <a href="https://www.facebook.com/profile.php?id=100009273588938" ><FacebookIcon></FacebookIcon></a>
            <a href="https://github.com/04stefke"><GitHubIcon></GitHubIcon></a>
            <a href="https://www.linkedin.com/in/stefan-jovanovic-73081929a/"><LinkedInIcon></LinkedInIcon></a>
            
        </Box>
    </Box>
)
}

export default Footer
