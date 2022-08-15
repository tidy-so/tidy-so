import { Container } from '@chakra-ui/react';
import LogoSq from '~components/visual/logo-sq';

const Navbar = () => {
  return (
    <Container mt={4} mb={16}>
      <LogoSq href={'/'} />
      {/*<Box as="nav">*/}
      {/*  <HStack as={'ul'}>*/}
      {/*    /!*<li>Item 1</li>*!/*/}
      {/*    /!*<li>Item 2</li>*!/*/}
      {/*  </HStack>*/}
      {/*</Box>*/}
    </Container>
  );
};

export default Navbar;
