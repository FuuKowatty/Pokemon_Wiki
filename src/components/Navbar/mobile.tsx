import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppbarContainer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from 'styles/Navbar';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { toggleMobileSearchbar } from 'store';

export const NavbarMobile = () => {
  const isActive = useAppSelector((state) => state.toggleSearchbar.isActive);
  const dispatch = useAppDispatch();

  return (
    <AppbarContainer
      component='header'
    >
      {isActive ? (
        <>
          <IconButton
            aria-label='close searchbar' 
            color="inherit"
            onClick={() => dispatch(toggleMobileSearchbar())}
          >
            <CloseIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper> 
              {/* czemu nie ma tutaj cursor pointer? */}
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search...' />
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
            color='inherit'
            sx={{ ml: 'auto' }}
            onClick={() => dispatch(toggleMobileSearchbar())}
          >
              <SearchIcon />
          </IconButton>
        </>
      )}
    </AppbarContainer>
  );
};
