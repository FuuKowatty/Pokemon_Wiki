import styled from '@emotion/styled';
import { Drawer, IconButton } from '@mui/material';
import { Colors } from 'styles/theme';

export const DrawerContainer = styled(Drawer)(() => ({}));

export const DrawerIconButton = styled(IconButton)(() => ({
  position: 'fixed',
  top: 20,
  left: 20,
  color: Colors.primary,
  zIndex: 1999,
}));
