import { useRouter } from 'next/router';
import DetailProduct from '../../components/DetailProduct';
import data from '../../product.json';
import { Flex } from '@chakra-ui/react';

const Detail = ({ params }) => {
  const router = useRouter();
  const product = data.products.filter(
    (data) => data.id === Number(params.id)
  )[0];

  return (
    <Flex
      bg="black"
      position="relative"
      width="100vw"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <DetailProduct product={product} router={router} />
    </Flex>
  );
};

export function getStaticProps(context) {
  return {
    props: { params: context.params },
  };
}

export const getStaticPaths = async () => {
  const ids = data.products.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Detail;
