import React from "react";
import {AppBar, Toolbar, Typography} from '@mui/material'

const Header = () => {
    return (
        <AppBar position ="static">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow:1}}>
                    Mi aplicación
                </Typography>
                <button color="innherit">Login</button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
