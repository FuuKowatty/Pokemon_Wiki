import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { toggleMobileSearchbar, toggleMobileMenu } from 'store';
import { Logo } from 'styles/Navbar';
import { SearchBar } from './searchbar';

export const NavbarMobile = () => {
  const isSearchbarActive = useAppSelector(
    (state) => state.toggleSearchbar.isSearchbarActive,
  );
  const dispatch = useAppDispatch();

  return (
    <>
      {isSearchbarActive ? (
        <>
          <IconButton
            onClick={() => dispatch(toggleMobileSearchbar())}
            edge="start"
          >
            <KeyboardBackspaceIcon color="primary" fontSize="large" />
          </IconButton>
          <SearchBar />
        </>
      ) : (
        <>
          <IconButton
            onClick={() => dispatch(toggleMobileMenu())}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Logo>POKEWIKI</Logo>
          <IconButton
            color="inherit"
            sx={{ ml: 'auto' }}
            onClick={() => dispatch(toggleMobileSearchbar())}
          >
            <SearchIcon />
          </IconButton>
        </>
      )}
    </>
  );
};
