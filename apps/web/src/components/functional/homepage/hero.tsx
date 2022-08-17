import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import BetaSignUp from '~components/functional/homepage/beta-sign-up';

const Hero = () => (
  <Container as={'header'} mb={20}>
    <VStack spacing={2} align={'start'} mb={10}>
      <Heading
        textColor={'gray.500'}
        fontWeight={'light'}
        as={'h1'}
        fontSize={['5xl', '6xl', '7xl']}
        lineHeight={1.15}
      >
        All of you, in one place
      </Heading>
      <Text fontSize="2xl" fontWeight="light" letterSpacing="wide">
        Let your fans discover all your content together in your new online home
      </Text>
    </VStack>
    <Box>
      <BetaSignUp
        triggerLabel={'Claim your username now'}
        triggerColorScheme={'brand'}
        triggerSize={'lg'}
      />
      {/*<p className={'text-gray-500 uppercase text-sm font-semibold'}>*/}
      {/*  Free during the beta*/}
      {/*</p>*/}
    </Box>
  </Container>
);

export default Hero;
