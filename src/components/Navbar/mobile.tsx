import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { toggleMobileSearchbar } from 'store';
import { SearchBar } from './searchbar';

export const NavbarMobile = () => {
  const isActive = useAppSelector((state) => state.toggleSearchbar.isActive);
  const dispatch = useAppDispatch();

  return (
    <>
      {isActive ? (
        <>
          <IconButton
            onClick={() => dispatch(toggleMobileSearchbar())}
          >
            <KeyboardBackspaceIcon color='primary'/>
          </IconButton>
          <SearchBar />
        </>
      ) : (
        <>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography>POKEWIKI</Typography>
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
