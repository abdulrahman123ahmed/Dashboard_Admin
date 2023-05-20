import { Fab, Tooltip, Modal, Box, Typography, styled, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "10px"
})
function Add() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip 
                    onClick={(e) => setOpen(true)} 
                    title="Add" 
                    sx={{position: "fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}>
                <Fab color='primary'>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal open={open} onClose={(e) => setOpen(false)}>
                <Box width={450} height={320} borderRadius={5} bgcolor="background.default" color="text.primary" p={3}>
                    <Typography variant="h6" color="gray" textAlign="center">
                    Create Post
                    </Typography>
                    <UserBox>
                        <Avatar sx={{width: 30, height: 30, cursor: "pointer"}} src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                        <Typography variant="span" fontWeight={500}>John Doe</Typography>
                    </UserBox>
                    <TextField sx={{width: "100%"}} multiline rows={3} variant='standard' placeholder="What's on your mind " />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant='contained'>
                        <Button>Post</Button>
                        <Button sx={{width: "100%"}}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add