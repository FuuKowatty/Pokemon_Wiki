import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { darken } from 'polished';
import { Colors } from 'styles/theme';

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  background: Colors.darker_blue,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  maxWidth: 420,
  padding: '0 30px',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    padding: '15px 0',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '15px 0',
    maxWidth: 250,
    alignItems: 'center',
    gap: '10px'
  },
}));

export const BannerImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '600px',
  [theme.breakpoints.down('lg')]: {
    width: '450px',
  },
  [theme.breakpoints.down('md')]: {
    width: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  '&::before': {
    content: '"THE WIKIPEDIA OF"',
    fontSize: '24px',
    color: Colors.standsOut,
    fontWeight: 'bold',
    display: 'block',
    postion: 'absolute',
    height: '.5rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '16px',
    },
  },
  textAlign: 'left',
  fontWeight: 'bold',
  lineHeight: 1.25,
  fontFamily: 'Golos Text',
  [theme.breakpoints.down('lg')]: {
    fontSize: '57px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  [theme.breakpoints.down('md')]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    padding: '0 20px',
    textAlign: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '15px 0',
  },
}));

export const BannerShopButton = styled(Button)(({ theme }) => ({
  background: Colors.body_bg,
  '&:hover': {
    background: Colors.primary,
    color: darken(0.1, Colors.dark_blue),
  },
  width: '100%',
  padding: '20px 0px',
  color: Colors.primary,
  fontWeight: 'bold',
  fontSize: '16px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '250px',
    padding: '15px 0px',
    fontSize: '14px',
  },
}));
