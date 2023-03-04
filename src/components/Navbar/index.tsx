import { useMediaQuery, useTheme } from '@mui/material';
import { NavbarDesktop } from 'components/Navbar/desktop';
import { NavbarMobile } from 'components/Navbar/mobile';
import { AppbarContainer } from 'styles/Navbar';

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppbarContainer>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
    </AppbarContainer>
  );
};
