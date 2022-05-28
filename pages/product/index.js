import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import { getDataProduk } from '../../src/redux/actions/product';
import productStyle from '../../styles/Product.module.css';
import { Spinner } from '@chakra-ui/react';

const Product = () => {
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(8);
  const data = useSelector((state) => state.product);
  const scrollAddData = () => {
    var maxHeigh =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    if (maxHeigh <= window.scrollY && limit !== data.jmlData) {
      setLimit(limit + 4);
    }
  };

  useEffect(() => {
    dispatch(getDataProduk(limit));
    window.addEventListener('scroll', scrollAddData);
  }, [dispatch, limit]);
  console.log(data?.data);

  return (
    <div className={productStyle.product}>
      <h3 className={`${productStyle.titlePageProduct}`}>Our Latest Product</h3>
      <div className={`${productStyle.containerProduct} containerProduct`}>
        {!data?.data && <Spinner size="xl" />}
        {data?.data?.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Product;
