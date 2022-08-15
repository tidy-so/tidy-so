import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import BetaSignUp from '~components/functional/homepage/beta-sign-up';

type HighlightCarouselProps = {
  firstLine: string;
  secondLine: string[];
};

const HighlightCarousel = ({
  firstLine,
  secondLine,
}: HighlightCarouselProps) => (
  <Box bgGradient={'linear(to-r, brand.600, brand.400)'} py={14}>
    <Box mb={8}>
      <Container centerContent={true}>
        <Text
          color={'brand.100'}
          fontWeight={400}
          fontSize={'3xl'}
          textAlign={'center'}
        >
          {firstLine}
        </Text>
      </Container>
      <Swiper
        spaceBetween={8}
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 2500 }}
      >
        {secondLine.map((line, key) => (
          <SwiperSlide key={key}>
            <Container centerContent={true}>
              <Heading color={'white'} fontSize={'4xl'}>
                {line}
              </Heading>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    <Container centerContent={true}>
      <BetaSignUp
        triggerLabel={'Join us'}
        triggerColorScheme={'gray'}
        triggerSize={'lg'}
      />
    </Container>
  </Box>
);

export default HighlightCarousel;
