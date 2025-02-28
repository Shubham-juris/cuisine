import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', borderBottom: '2px solid #ddd' }}>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{ flexGrow: 1, color: '#ffd633', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}
        >
          CUISINE CAREER 
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
