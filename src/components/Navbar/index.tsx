import { Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { NavbarDesktop } from 'components/Navbar/desktop';
import { NavbarMobile } from 'components/Navbar/mobile';
import { MyAppBar } from 'styles/Navbar';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <MyAppBar elevation={0}>
      <Toolbar>
        {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      </Toolbar>
    </MyAppBar>
  );
};

export default Navbar;
