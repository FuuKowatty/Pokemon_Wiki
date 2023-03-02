import styled from '@emotion/styled';
import { Box, InputBase } from '@mui/material';
import { Colors } from 'styles/theme';

export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
}));

export const Search = styled('div')(() => ({
  position: 'relative',
  background: 'none',
  marginRight: '10px',
  marginLeft: '0',
  width: '100%',
}));

export const SearchIconWrapper = styled('div')(() => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: Colors.primary,
  width: '100%',
  padding: '0 30px', 
  
}));
