import type { ComponentSingleStyleConfig } from '@chakra-ui/theme';

const Container: ComponentSingleStyleConfig = {
  baseStyle: {
    maxW: [
      '100%',
      'container.sm',
      'container.md',
      'container.lg',
      // "container.xl",
    ],
    px: [6, 8, 12],
  },
};

export default Container;
