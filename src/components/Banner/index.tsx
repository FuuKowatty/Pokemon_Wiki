import { useMediaQuery, useTheme } from '@mui/material';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from 'styles/Banner';
import banner from 'assets/banner2.png';
import banner_mobile from 'assets/banner_mobile.png';

export const Banner = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer >
    <BannerImage src={isMobile ? banner_mobile : banner} alt='banner-image'/>
    <BannerContent>
      
      <BannerTitle variant="h2">
        POKEMONS
      </BannerTitle>
      <BannerDescription variant="subtitle1">
      POKEWIKI is library of pokemons based on pokeAPI. It enable you acces you to list of all pokemons, their specific info or some curio.
      </BannerDescription>

      <BannerShopButton color="secondary">Get Started</BannerShopButton>
    </BannerContent>
  </BannerContainer>
  );
};
