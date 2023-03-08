import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/system';
import { Slide } from '@mui/material';
import { MessageText, PromotionsContainer } from 'styles/Promotions/index';

const messages = [
  '20% off on your first order!',
  'Summer sale starts now, visit any store.',
  'Please like and subscribe :)',
];

export const Promotions = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        in={show}
        direction={show ? 'right' : 'left'}
        timeout={{
          enter: 800,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
};
