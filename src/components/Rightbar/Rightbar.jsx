import { Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem } from '@mui/material'
import React from 'react'

function Rightbar() {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position='fixed' width={300}>
                <Box sx={{ margin: '40px 0' }}>
                    <Typography variant='h6' fontWeight={100}>
                        Online Friends
                    </Typography>
                    <AvatarGroup max={7}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                        />
                        <Avatar
                            alt="Travis Howard"
                            src="https://material-ui.com/static/images/avatar/2.jpg"
                        />
                        <Avatar
                            alt="Cindy Baker"
                            src="https://material-ui.com/static/images/avatar/3.jpg"
                        />
                        <Avatar alt="Agnes Walker" src="" />
                        <Avatar
                            alt="Trevor Henderson"
                            src="https://material-ui.com/static/images/avatar/6.jpg"
                        />
                        <Avatar
                            alt="Trevor Henderson"
                            src="https://material-ui.com/static/images/avatar/7.jpg"
                        />
                        <Avatar
                            alt="Trevor Henderson"
                            src="https://material-ui.com/static/images/avatar/8.jpg"
                        />
                        <Avatar
                            alt="Trevor Henderson"
                            src="https://material-ui.com/static/images/avatar/7.jpg"
                        />
                        <Avatar
                            alt="Trevor Henderson"
                            src="https://material-ui.com/static/images/avatar/8.jpg"
                        />
                    </AvatarGroup>
                </Box>
                <Box sx={{ margin: '40px 0' }}>
                    <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                        Latest Photos
                    </Typography>
                    <ImageList cols={3} rowHeight={100} gap={10}>
                        <ImageListItem>
                            <img
                                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                                alt="Avatar"
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src="https://material-ui.com/static/images/image-list/burgers.jpg"
                                alt="Avatar"
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src="https://material-ui.com/static/images/image-list/camera.jpg"
                                alt="Avatar"
                            />
                        </ImageListItem>
                    </ImageList>
                </Box>
            </Box>
        </Box>
    )
}

export default Rightbar