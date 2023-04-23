import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  MenuItem,
  MenuList,
  Stack,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Link from 'next/link';
import DarkToggleSwitch from './common/DarkToggleSwitch';


export const Navbar = ({ toggleDark }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButton = <IconButton
    size='large'
    edge='start'
    aria-label='menu'
    sx={{ display: { xs: 'block', sm: 'none' } }}
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <MenuIcon />
  </IconButton>

  const darkModeToggle = <FormControlLabel
    control={<DarkToggleSwitch sx={{ m: 1 }} />}
    onChange={toggleDark} label={''} />

  const drawer = <Drawer anchor='bottom' open={isMenuOpen} sx={{ display: { xs: 'block', md: 'none' } }} onClose={() => setIsMenuOpen(false)}>
    <Box>
      <Box sx={{ display: 'block', alignItems: 'center' }}>
        <Box height={220} width={'100%'} sx={{
          background: "url('/nbs-ai.jpg')",
          backgroundSize: 'cover',
          filter: 'grayscale(100)',
          backgroundPosition: 'top'
        }}></Box>
        <Box sx={{ pt: 3, pb: 1 }}>
          <Typography variant='h2' textAlign={'center'} sx={{ fontSize: 40, margin: 'auto' }}>Shoppers</Typography>
        </Box>
        <Divider sx={{ pb: 2 }} />
      </Box>
      <Stack direction={'column'} spacing={0} my={2} justifyContent={'center'}>
        <MenuItem>Companies</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Learn</MenuItem>

      </Stack>
      <Divider />
      <Box sx={{ mt: 2, mx: 2, display: 'flex', justifyContent: 'center' }}>
        <FormControlLabel
          control={<DarkToggleSwitch sx={{}} />}
          onChange={toggleDark}
          checked={isDark}
          label={`Try ${isDark ? 'light' : 'dark'} mode`}
        />
      </Box>
      <Divider sx={{ pb: 2 }} />

      <Box p={2}>

        <Typography textAlign={'center'} variant='body2'>Did not find what you looking for? Write me up at <Typography variant='body2' color="inherit" component={'a'} href='mailto:dev.nadhirsha@gmail.com'>dev.nadhirsha@gmail.com</Typography> </Typography>
      </Box>
    </Box>
  </Drawer>


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          background: isDark ? 'black' : 'white',
          boxShadow: 'none',
          pt: 2,
          pb: 2,
        }}
      >
        <Container>
          <Toolbar sx={{
            color: isDark ? 'white' : 'black'
          }}>
            <Typography
              component={Link}
              href={'/'}
              variant='h6'
              color='inherit'
              sx={{
                flexGrow: 1,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Shoppers
            </Typography>
            <Stack direction={'row'} display={{ xs: 'none', md: 'inline-flex' }}>
              <MenuItem>Jobs</MenuItem>
              <MenuItem>Companies</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Learning</MenuItem>
            </Stack>
            {menuButton}
            {drawer}
            <Box display={{ xs: 'none', md: 'inline' }}>
              {darkModeToggle}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
