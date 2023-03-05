import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { darken } from 'polished';
import { Colors } from 'styles/theme';


export const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: Colors.darker_blue,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));
  
  export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 420,
    padding: '30px',
  }));
  
  export const BannerImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '500px',
    [theme.breakpoints.down('md')]: {
      width: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '320px',
      height: '300px',
    },
  }));
  
  export const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '42px',
    },
  }));
  
  export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      marginBottom: '1.5em',
    },
  }));
  
  export const BannerShopButton = styled(Button)(({ theme }) => ({
    background: Colors.body_bg,
    '&:hover': {
      background: Colors.primary,
      color: darken(0.1 ,Colors.dark_blue)
    },
    width: '100%',
    padding: '20px 0px',
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px',
      fontSize: '14px',
    },
  }));