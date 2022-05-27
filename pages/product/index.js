import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import { getDataProduk } from '../../src/redux/actions/product';
import productStyle from '../../styles/Product.module.css';

const Product = () => {
  const dispatch = useDispatch();

  const [byId, setByid] = useState(8);
  const data = useSelector((state) => state.product);
  const scrollNav = () => {
    var limit =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    if (limit <= window.scrollY) {
      setByid(byId + 4);
    }
    console.log(limit);
    console.log(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollNav);
    dispatch(getDataProduk(byId));
  }, [dispatch, byId]);

  return (
    <div className={productStyle.product}>
      <h3 className={`${productStyle.titlePageProduct}`}>Our Latest Product</h3>
      <div className={`${productStyle.containerProduct} containerProduct`}>
        {data?.dataById?.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Product;
