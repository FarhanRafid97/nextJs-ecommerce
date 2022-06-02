import { useRouter } from 'next/router';
import detailStyle from './DetailProduct.module.css';
import DetailProduct from '../../components/DetailProduct';
import data from '../../product.json';

const Detail = ({ params }) => {
  const router = useRouter();
  const product = data.products.filter(
    (data) => data.id === Number(params.id)
  )[0];

  console.log(product);

  return (
    <div className={detailStyle.detailContainer}>
      <DetailProduct product={product} router={router} />
    </div>
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
