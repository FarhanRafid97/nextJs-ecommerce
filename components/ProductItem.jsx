import React from 'react';
import productStyle from '../styles/Product.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Spinner } from '@chakra-ui/react';

const ProductItem = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <a className={productStyle.cardProduct}>
        <div className={productStyle.productPhoto}>
          {product?.image ? (
            <Image
              src={product?.image}
              width={200}
              height={250}
              alt="Landscape picture"
            />
          ) : (
            <Spinner size="xl" />
          )}
        </div>
        <div className={productStyle.description}>
          <p className={productStyle.titleProduct}>{product?.title}</p>
          <p className={productStyle.priceProduct}>$.{product?.price}</p>
          <p className={productStyle.productDesc}>{product?.description}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProductItem;
