import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import productStyle from '../../styles/Product.module.css';
import { Spinner } from '@chakra-ui/react';
import data from '../../product.json';

const Product = () => {
  const [limit, setLimit] = useState(8);

  const dataLimit = data.products.filter((data) => data.id <= limit);

  useEffect(() => {
    const scrollAddData = () => {
      var maxHeigh =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (maxHeigh <= window.scrollY && limit !== data.jmlData) {
        setTimeout(() => {
          setLimit(limit + 4);
        }, 500);
      }
    };
    window.addEventListener('scroll', scrollAddData);
    return () => {
      window.removeEventListener('scroll', scrollAddData);
    };
  }, [limit]);

  return (
    <div className={productStyle.product}>
      <h3 className={`${productStyle.titlePageProduct}`}>Our Latest Product</h3>
      <div className={`${productStyle.containerProduct} containerProduct`}>
        {!data?.products && <Spinner size="xl" />}
        {dataLimit.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Product;
