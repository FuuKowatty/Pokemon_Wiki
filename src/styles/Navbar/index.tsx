import styled from '@emotion/styled';
import { AppBar, InputBase } from '@mui/material';
import { Colors } from 'styles/theme';

export const MyAppBar = styled(AppBar)(() => ({
  background: 'none',
  color: Colors.primary,
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
    color: Colors.primary
  }));