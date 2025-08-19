import React from 'react'
import { FeedData } from '../../Data/FeedData'
import { Box } from '@mui/material'
import PostCard from '../Cards/PostCard'

const Posts = () => {
    return (
        <Box>{
            FeedData.map((post) => (
                <PostCard key={post.id} post={post} />
            ))
        }</Box>
    )
}

export default Posts