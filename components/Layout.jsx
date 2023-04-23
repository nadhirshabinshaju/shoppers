import { Box, Button, useTheme } from '@mui/material';
import Navbar from './Navbar';
export const Layout = ({ children, toggleDark }) => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white', minHeight: '100vh' }}>
      <Navbar toggleDark={toggleDark} />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
