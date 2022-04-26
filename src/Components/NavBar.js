import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {

    const navLinks = ['Home', 'Category', 'Content', 'Content Provider', 'Discussion Form', 'Carrer Expert', 'ContactUS', 'About Us', 'SignIn']
    return (
        <>
        <Box sx={{}}>
            <AppBar position="static" sx={{padding:'25px',background:'#3E0D02'}}>
                <Toolbar variant="dense" sx={{marginLeft:'150px',}}>
                    {navLinks.map((data) => {
                      return  <Typography  color={'white'} sx={{fontSize:"13px",marginLeft:'auto'}}>{data}</Typography>
                    })}

                </Toolbar>

            </AppBar>

        </Box>
        </>
    );
}
