import { Heading } from '@chakra-ui/react';
import Link from 'next/link';

type LogoSqProps = {
  href: string;
};

const LogoSq = ({ href }: LogoSqProps) => (
  <Heading
    as={'header'}
    bgColor="brand.400"
    fontWeight={'bold'}
    color={'gray.50'}
    display={'inline-block'}
    p={4}
    height={50}
    width={50}
    textAlign={'center'}
    lineHeight={0.5}
    rounded={'2xl'}
    userSelect={'none'}
  >
    <Link href={href}>t</Link>
  </Heading>
);

export default LogoSq;
