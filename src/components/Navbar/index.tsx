import { useMediaQuery, useTheme } from '@mui/material';
import { NavbarDesktop } from 'components/Navbar/desktop';
import { NavbarMobile } from 'components/Navbar/mobile';

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return <>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</>;
};
