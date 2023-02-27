import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import Home from 'pages/Home';
import { NavbarDesktop } from 'components/Navbar/desktop';
import { NavbarMobile } from 'components/Navbar/mobile';

const App = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BrowserRouter>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />} 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
