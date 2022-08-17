import Container from '~styles/container';
import { extendTheme } from '@chakra-ui/react';
import Card from '~styles/card';
import Button from '~styles/button';
import Form from '~styles/form';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const theme = extendTheme(
  {
    components: {
      Container,
      Button,
      Card,
      Form,
    },
    fonts: {
      heading: '"Montagu Slab", serif',
    },
    colors: {
      brand: {
        DEFAULT: '#22AFD3',
        '50': '#E0F5FA',
        '100': '#CAEEF7',
        '200': '#9FDFEF',
        '300': '#73D0E8',
        '400': '#47C2E1',
        '500': '#22AFD3',
        '600': '#1B8BA7',
        '700': '#14667B',
        '800': '#0D424F',
        '900': '#061D23',
      },
      // success:
    },
    styles: {
      global: {
        'html, body': {
          minHeight: '100vh',
          bgColor: 'gray.50',
          color: 'gray.700',
        },
      },
    },
  },
  withProse()
);

export default theme;
