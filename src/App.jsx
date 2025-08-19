import React from 'react'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import { Box, Stack } from '@mui/material'
import Navbar from './components/Navbar'
import AddPost from './components/AddPost'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <AddPost />
    </Box>
  )
}

export default App