import { Box, Fab, Modal, styled, Tooltip, Typography, TextField, Stack, ButtonGroup, Button, Avatar } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import {
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
} from "@mui/icons-material";

const StyledModel = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
});

function Add() {

    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <Tooltip
                title="Add New Post"
                onClick={() => setOpen(true)}
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", sm: 30 },
                }}
            >
                <Fab color='primary' aria-label='add'>
                    <AiOutlinePlus fontSize='1.5rem' />
                </Fab>
            </Tooltip>
            <StyledModel
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={300}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    p={3}
                    borderRadius={5}
                >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span">
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModel>
        </React.Fragment>
    )
}

export default Add