import styled from '@emotion/styled';
import { Box, InputBase } from '@mui/material';
import { Colors } from 'styles/theme';

export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  minHeight: '80px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 5,
  padding: '2px 8px',
}));

export const Search = styled(Box)(() => ({
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: Colors.primary,
  width: '100%',
  display: 'flex',
  borderRadius: '20px',
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: Colors.secondary,
  width: '100%',
  margin: 0
}));
