import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const navItems = [
  'Home', 'About', 'View Jobs', 'Blogs', 'Contact Us', 'Careers'
];

const dropdownItems = {
  Employers: ['Post a Job', 'Manage Listings'],
  Location: ['USA', 'Canada', 'Europe']
};

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdown, setDropdown] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setDropdown(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setDropdown(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        {Object.keys(dropdownItems).map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffd633', boxShadow: 'none', borderBottom: '2px solid #ddd' }}>
      <Toolbar>
        {(isMobile || isTablet) && (
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ color: 'Black' }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}
        {!(isMobile || isTablet) && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000', fontWeight: 'bold', textTransform: 'uppercase', mx: 1 }}>
                {item}
              </Button>
            ))}
            {Object.keys(dropdownItems).map((item) => (
              <Button
                key={item}
                onClick={(event) => handleMenuOpen(event, item)}
                sx={{ color: 'Black', fontWeight: 'bold', textTransform: 'uppercase', mx: 1 }}
              >
                {item} ▼
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {dropdownItems[dropdown]?.map((subItem) => (
          <MenuItem key={subItem} onClick={handleMenuClose}>{subItem}</MenuItem>
        ))}
      </Menu>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
