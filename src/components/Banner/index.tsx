import { Typography } from '@mui/material';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from 'styles/Banner';
import banner from '../../assets/banner.png';

export const Banner = () => {
  return (
    <BannerContainer >
    <BannerImage src={banner} alt='banner-image'/>
    <BannerContent>
      <Typography variant="h6">Huge Collection</Typography>
      <BannerTitle variant="h2">
        New Bags
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
