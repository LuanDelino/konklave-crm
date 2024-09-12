import { Box, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Box textAlign="center" p={5}>
      <Heading mb={4}>Product Detail: {id}</Heading>
    </Box>
  );
};

export default ProductDetails;