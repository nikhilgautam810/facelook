import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { RecentPostData } from '../../Data/RecentPostData'

const RecentPost = () => {
    return (
            <ImageList cols={3} rowHeight={100} gap={5}>
                {RecentPostData.map((item, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
    )
}

export default RecentPost