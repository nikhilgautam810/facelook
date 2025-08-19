import { Box } from '@mui/material'
import React from 'react'
import Posts from './Posts/Posts'

const Feed = () => {
  return (
    <Box flex={4}>
      <Posts />
    </Box>
  )
}

export default Feed