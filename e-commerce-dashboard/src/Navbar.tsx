
import { useState, MouseEvent } from 'react';
import { AppBar, Avatar, Box, Container, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import { PersonOffOutlined } from '@mui/icons-material'
import MenuIcon from "@mui/icons-material/Menu"

export default function NavBar() {
    return <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <PersonOffOutlined sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, color: 'inherit', textDecoration: 'none' }} >LOGO</Typography>
                <Box sx={{flexGrow: 0}}>
                    <Avatar alt="profile" src="data:image/jpeg;base64,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" />
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
}

function Nav() {
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    function handleOpenNavMenu(event: MouseEvent<HTMLElement>) {
        setAnchorNav(event.currentTarget);
    }
    function handleCloseNavMenu() {
        setAnchorNav(null);
    }
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="user account" onClick={handleOpenNavMenu} ><MenuIcon /></IconButton>
            <Menu id="menu-appbar" anchorEl={anchorNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorNav)} onClose={handleCloseNavMenu} sx={{
                display: { xs: 'block', md: 'none' },
            }}>

            </Menu>
        </Box>
    )
}