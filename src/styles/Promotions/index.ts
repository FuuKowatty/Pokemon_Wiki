import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Colors } from '../theme';

export const PromotionsContainer = styled(Box)(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    padding: '40px 0',
  },
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0px 20px 0px',
  overflow: 'hidden',
  background: Colors.dark_blue,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montez", "cursive"',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  color: Colors.primary,
  fontSize: '1.2rem',
}));
