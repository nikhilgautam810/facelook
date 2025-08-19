import { Box } from '@mui/material'
import React from 'react'
import { FriendsData } from '../../Data/FriendsData'
import Friend from '../Cards/Friend'

const Friends = () => {
    return (
        <Box>
            {
                FriendsData.map((friend) => (
                    <Friend key={friend.id} friend={friend} />
                ))
            }
        </Box>
    )
}

export default Friends