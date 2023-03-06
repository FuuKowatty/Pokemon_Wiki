import { useMediaQuery, useTheme, Typography } from '@mui/material';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from 'styles/Banner';
import banner from 'assets/banner.png';
import banner_mobile from 'assets/banner_mobile.png';
//sam bannner byl importowany

export const Banner = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer >
    <BannerImage src={isMobile ? banner_mobile : banner} alt='banner-image'/>
    <BannerContent>
      <Typography variant="h6">Huge Collection</Typography>
      <BannerTitle variant="h2">
        POKEWIKI
      </BannerTitle>
      <BannerDescription variant="subtitle1">
        Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
        tempor incididunt ut labore et dolore magna
      </BannerDescription>

      <BannerShopButton color="secondary">Get Started</BannerShopButton>
    </BannerContent>
  </BannerContainer>
  );
};
