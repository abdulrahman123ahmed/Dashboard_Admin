import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})
const Search = styled('div')(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));
const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center"
}));
function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant="h6" sx={{display: {xs: 'none', sm: 'block'}}}>LAMA DEV</Typography>
                <Pets sx={{display: {xs: 'block', sm: 'none'}}} />
                <Search>
                    <InputBase placeholder='Search' />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color='error'>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <Notifications />
                    </Badge>
                    <Avatar sx={{width: 30, height: 30, cursor: "pointer"}} src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' onClick={(e) => setOpen(true)} />
                </Icons>
            </StyledToolbar>
            <Menu
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
            vertical: "top",
            horizontal: "right",
            }}
            transformOrigin={{
            vertical: "top",
            horizontal: "right",
            }}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar