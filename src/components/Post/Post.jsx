import { Avatar, Card, CardHeader, IconButton, CardMedia, CardContent, CardActions, Typography, Checkbox } from '@mui/material';
import { FcLikePlaceholder, FcLike, FcShare, FcSettings } from 'react-icons/fc';
import React from 'react';

function Post({publishedBy, createdAt, imageUrl, imageAlt}) {
    return (
        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" />
                }
                action={
                    <IconButton aria-label='settings'>
                        <FcSettings />
                    </IconButton>
                }
                title={publishedBy}
                subheader={createdAt}
            />
            <CardMedia
                component="img"
                height="20%"
                image={imageUrl}
                alt={imageAlt}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FcLikePlaceholder />}
                        checkedIcon={<FcLike />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <FcShare />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post