import React from 'react';
import productStyle from '../styles/Product.module.css';
import Image from 'next/image';

const ProductItem = ({ product }) => {
  return (
    <div className={productStyle.cardProduct}>
      <div className={productStyle.productPhoto}>
        <Image
          src={product?.image}
          width={200}
          height={250}
          alt="Landscape picture"
        />
      </div>
      <div className={productStyle.description}>
        <p className={productStyle.titleProduct}>{product?.title}</p>
        <p className={productStyle.priceProduct}>$.{product?.price}</p>

        <p className={productStyle.productDesc}>{product?.description}</p>
        <button className={productStyle.buttonProduct}>BUY NOW</button>
      </div>
    </div>
  );
};

export default ProductItem;
