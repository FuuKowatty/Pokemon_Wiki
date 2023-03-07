
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Search, StyledInputBase } from 'styles/Navbar';


export const SearchBar = () => {

  return (
    <>
    <Search component='form' >
      <IconButton color='secondary' type='submit'>
        <SearchIcon />
      </IconButton>
      <StyledInputBase placeholder="Search..."  required/>
      <IconButton
        type='reset'
        aria-label="close searchbar"
        color="primary"
        sx={{position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)'}}
      >
        <CloseIcon fontSize='small' color='secondary'/>
      </IconButton>
    </Search>
  </>
  );
};
