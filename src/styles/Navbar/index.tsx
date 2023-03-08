import styled from '@emotion/styled';
import { Box, InputBase, Typography } from '@mui/material';
import { Colors } from 'styles/theme';

export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  minHeight: '80px',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 5,
  padding: '2px 8px',
}));

export const Search = styled(Box)(() => ({
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: Colors.primary,
  display: 'flex',
  boxShadow: `inset 0 0 3px ${Colors.secondary}`,
  borderRadius: '20px',
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: Colors.secondary,
  width: '100%',
  margin: 0,
}));

export const Logo = styled(Typography)(() => ({
  fontFamily: 'Golos Text',
  fontSize: 25,
  color: 'primary',
}));
