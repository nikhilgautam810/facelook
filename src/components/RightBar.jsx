import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'
import RecentPost from './Posts/RecentPost'
import Friends from './Posts/Friends'

const RightBar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position={'fixed'} width={300}>
        <Typography variant='h6' fontWeight={200}>
          Online Friend
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={200} my={2}>
          Recent Post
        </Typography>
        <RecentPost />
        <Typography variant='h6' fontWeight={200} my={2}>
          Last Conversations
        </Typography>
        <Friends />
      </Box>
    </Box >
  )
}

export default RightBar