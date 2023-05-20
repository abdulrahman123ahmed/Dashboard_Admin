import { Box, Typography, AvatarGroup, Avatar, ImageList, ImageListItem, ListItem, ListItemAvatar, ListItemText, Divider, List } from '@mui/material'
import React from 'react'
import img1 from "../assets/pexels-alexander-mils-2103949.jpg"
import img2 from "../assets/pexels-jane-doan-1099680.jpg"
import img3 from "../assets/pexels-julian-jagtenberg-103124.jpg"
function Rightbar() {
    return (
        <Box p={2} flex={2} sx={{display: {xs: "none", lg: "block"}}}>
            <Box position="fixed">
                <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={3} mb={4}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem sx={{width:"90%"}}>
                        <img src={img1} alt='' />
                    </ImageListItem>
                    <ImageListItem sx={{width:"90%"}}>
                        <img src={img2} alt='' />
                    </ImageListItem>
                    <ImageListItem sx={{width:"90%"}}>
                        <img src={img3} alt='' />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={3} mb={4}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar