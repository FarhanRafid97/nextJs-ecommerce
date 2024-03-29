import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import DetailProduct from '../../components/DetailProduct';
import data from '../../product.json';
import Head from 'next/head';
interface DetailProps {
  params: { id?: number };
}
const Detail: React.FC<DetailProps> = ({ params }) => {
  const router = useRouter();

  const product = data.products.filter(
    (data) => data.id === Number(params.id)
  )[0];

  return (
    <Flex
      marginTop={['64px', '76px']}
      bg="black"
      position="relative"
      width="100vw"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Head>
        <title>{product.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={product.description} />
      </Head>
      <DetailProduct product={product} router={router} />
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = (
  context: GetStaticPropsContext
) => {
  return {
    props: { params: context.params },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = data.products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Detail;
