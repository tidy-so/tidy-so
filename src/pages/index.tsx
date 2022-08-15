import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/functional/homepage/hero';
import HighlightCarousel from '../components/functional/homepage/highlight-carousel';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Card from '~components/visual/card';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>tidy.so | All of you, in one place</title>
        <meta
          name="description"
          content="Create a home for your fans to follow you. Fast and easy."
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Box as={'main'}>
        <Hero />
        <Container as={'section'} mb={20}>
          <SimpleGrid minChildWidth={240} gap={8}>
            <Card>
              <VStack spacing={4} alignItems={'start'}>
                <Heading fontSize={'xl'} color={'gray.500'} fontWeight={700}>
                  Works on auto-pilot
                </Heading>
                <Text>
                  Stale links? Manual updates? Pfff no... Just link your
                  existing accounts and your personal page will always show
                  fresh content.
                </Text>
              </VStack>
            </Card>

            <Card>
              <VStack spacing={4} alignItems={'start'}>
                <Heading fontSize={'xl'} color={'gray.500'} fontWeight={700}>
                  All your platforms
                </Heading>
                <Text>
                  We fetch content from Twitter, Instagram, and YouTube, and
                  we&apos;re actively adding new platforms.
                </Text>
              </VStack>
            </Card>

            <Card>
              <VStack spacing={4} alignItems={'start'}>
                <Heading fontSize={'xl'} color={'gray.500'} fontWeight={700}>
                  Make it yours
                </Heading>
                <Text>
                  Customize the color, write an awesome bio, and use your own
                  domain. Adapt your home to your brand.
                </Text>
              </VStack>
            </Card>
          </SimpleGrid>
        </Container>

        <HighlightCarousel
          firstLine={'We are building a better online home for'}
          secondLine={[
            'fitness coaches',
            'musicians',
            'podcasters',
            'models',
            'ASMR artists',
            'course creators',
            'writers',
            'influencers',
            'streamers',
          ]}
        />
      </Box>
    </>
  );
};

export default Home;
