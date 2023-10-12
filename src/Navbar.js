import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './style.css';

function Navbar() {
    return (
      <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          To Do Applcation
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    );
}

export default Navbar;