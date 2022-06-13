import React, { useState } from 'react';
import { AiFillMail, AiFillNotification, AiOutlineAccountBook, AiOutlineLogout, AiOutlineProfile, AiOutlineSearch, AiOutlineSetting, AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Badge, InputBase, Toolbar, Typography, IconButton, Menu, Avatar, MenuItem, Divider, ListItemIcon, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { SidebarDrawer } from '../Sidebar/Sidebar';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '25px',
    marginLeft: 0,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const IconsProvider = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: 20,
});

function Navbar({ mode, setMode }) {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const profileMenu = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <AppBar position='sticky'>
                <StyledToolbar>
                    <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Socail App
                    </Typography>
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                        >
                            <AiOutlineMenu color='white' fontSize='1.5rem' cursor='pointer' />
                        </IconButton>
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <AiOutlineSearch />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder='Search..'
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <IconsProvider>
                        <Badge badgeContent={2} color='error'>
                            <AiFillMail cursor='pointer' fontSize='1.2rem' />
                        </Badge>
                        <Badge badgeContent={15} color='error'>
                            <AiFillNotification cursor='pointer' fontSize="1.2rem" />
                        </Badge>
                        <Tooltip title="Account Setting">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                aria-controls={profileMenu ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={profileMenu ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                            </IconButton>
                        </Tooltip>
                    </IconsProvider>
                </StyledToolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                open={profileMenu}
                id="account-menu"
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <AiOutlineProfile />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AiOutlineAccountBook />
                    </ListItemIcon>
                    My Account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <AiOutlineUserAdd />
                    </ListItemIcon>
                    Add Another Account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AiOutlineSetting />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AiOutlineLogout />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
            <SidebarDrawer open={drawerOpen} setOpen={setDrawerOpen} mode={mode} setMode={setMode} />
        </>
    )
}

export default Navbar