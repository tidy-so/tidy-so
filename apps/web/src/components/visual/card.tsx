import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react';

type CardProps = BoxProps;

const Card = (props: CardProps) => {
  const styles = useStyleConfig('Card', {});

  return <Box __css={styles} {...props} />;
};

export default Card;
