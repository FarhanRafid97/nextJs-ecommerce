import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { detailPorduct } from '../../src/redux/actions/product';

const index = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const product = useSelector((state) => state.product);
  const detailProd = product[0];

  useEffect(() => {
    dispatch(detailPorduct(params.id));
  }, [dispatch, router]);

  return (
    <div>
      <h3>{detailProd?.title}</h3>
      <p>{detailProd?.price}</p>
      <p>{detailProd?.description}</p>
      <button onClick={() => router.back()}> BACK </button>
    </div>
  );
};
export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

export default index;
