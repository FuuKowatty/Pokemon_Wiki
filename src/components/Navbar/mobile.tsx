import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import { Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { SearchIconWrapper, StyledInputBase } from 'styles/Navbar';
// import { useAppDispatch } from 'store/hooks';
// import { toggleMobileSearchbar } from 'store';



export const NavbarMobile = () => {

  // const isActive = useAppSelector((state) => state.toggleSearchbar.isActive);
  // const dispatch = useAppDispatch();

  return (
    <>
    <IconButton>
      <CloseIcon />
    </IconButton>
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"

            />
      </Search>

      {/* <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
      <Typography
      
      >PokeWiki</Typography>
      <Search sx={{ml: 'auto'}} onClick={() => dispatch(toggleMobileSearchbar())}> bez search
        <SearchIconWrapper
          
        >
          <SearchIcon />
        </SearchIconWrapper>
      </Search> */}
      
    </>
  );
};
