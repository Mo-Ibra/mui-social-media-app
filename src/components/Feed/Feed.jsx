import { Box } from '@mui/material'
import React from 'react'
import Post from '../Post/Post'

function Feed() {

    const Image1 = 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

    return (
        <Box flex={4} p={{ xs: 0, md: 2 }}>
            <Post publishedBy="John Doe" createdAt="September 14, 2022" imageUrl={Image1} imageAlt="Alt" />
            <Post publishedBy="Mohamed Ibrahim" createdAt="September 16, 2022" imageUrl={Image1} imageAlt="Alt" />
            <Post publishedBy="Hassan ahmed" createdAt="September 18, 2022" imageUrl={Image1} imageAlt="Alt" />
            <Post publishedBy="Sayed Ahmed" createdAt="September 20, 2022" imageUrl={Image1} imageAlt="Alt" />
            <Post publishedBy="Hassan Moham11" createdAt="September 25, 2022" imageUrl={Image1} imageAlt="Alt" />
        </Box>
    )
}

export default Feed