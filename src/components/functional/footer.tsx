import NextLink from 'next/link';
import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';

const Footer = () => (
  <Container as={'footer'} mt={20} mb={10}>
    <Flex>
      <Text color={'gray.500'} fontSize={'small'}>
        © tidy.so 2022
      </Text>
      <Spacer />
      <Box as="nav" fontSize={'sm'}>
        <HStack as={'ul'} spacing={8}>
          <NextLink href={'/legal/terms'}>
            <Link as={'a'} color={'gray.500'}>
              Terms and conditions
            </Link>
          </NextLink>
          <NextLink href={'/legal/privacy'}>
            <Link as={'a'} color={'gray.500'}>
              Privacy policy
            </Link>
          </NextLink>
        </HStack>
      </Box>
    </Flex>
  </Container>
);

export default Footer;
