import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import { SearchIconWrapper } from 'styles/Navbar';

export const NavbarMobile = () => {
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
      <Typography
      
      >PokeWiki</Typography>
      <Search sx={{ml: 'auto'}}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
    </>
  );
};
