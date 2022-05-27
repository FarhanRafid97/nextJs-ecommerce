import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailPorduct } from '../../src/redux/actions/product';
import detailStyle from './DetailProduct.module.css';
import Image from 'next/image';

const Detail = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(detailPorduct(params.id));
  }, [dispatch]);
  console.log(product);

  return (
    <div className={detailStyle.detailContainer}>
      <div className={detailStyle.photoProduct}>
        {/* <Image
          src={product?.image}
          width={200}
          height={250}
          alt="Landscape picture"
        /> */}
      </div>
      <div className={detailStyle.detailProductDesc}>
        <h3>{product?.title}</h3>
        <p>{product?.price}</p>
        <p>{product?.description}</p>
        <button onClick={() => router.back()}> BACK </button>
      </div>
    </div>
  );
};
export function getStaticProps(context) {
  return {
    props: { params: context.params },
  };
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Detail;
