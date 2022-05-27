import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { detailPorduct } from '../../../src/redux/actions/product';

const index = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(detailPorduct(params.id));
  }, [dispatch, router]);
  console.log(product);

  return (
    <div>
      <h3>{product?.title}</h3>
      <p>{product?.price}</p>
      <p>{product?.description}</p>
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
