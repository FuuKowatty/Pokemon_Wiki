import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Search, StyledInputBase } from 'styles/Navbar';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { toggleMobileSearchbar } from 'store';
import { Colors } from 'styles/theme';


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
            <KeyboardBackspaceIcon color='primary' />
          </IconButton>
          <Search>
            <IconButton color='secondary'>
              <SearchIcon />
            </IconButton>
            <StyledInputBase placeholder="Search..." />
            <IconButton
              aria-label="close searchbar"
              color="primary"
              sx={{position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)'}}
            >
              <CloseIcon fontSize='small' color='secondary'/>
            </IconButton>
          </Search>

          
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
          <Typography>PokeWiki</Typography>
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
