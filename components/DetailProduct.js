import React, { useState } from 'react';
import detailStyle from '../pages/product/DetailProduct.module.css';
import Image from 'next/image';

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiFillHeart,
} from 'react-icons/ai';

import { IoIosArrowBack } from 'react-icons/io';
import { GrShop } from 'react-icons/gr';

const DetailProduct = ({ product, router }) => {
  const moreInfo = [
    '60% cotton, 40% acrylic',
    'Breathable cotton blend',
    'Form-fitting shape',
    'One size fits most',
  ];
  const [like, setLike] = useState(false);
  return (
    <>
      <div className={`${detailStyle.photoProduct}`}>
        {product?.image ? (
          <>
            <div className={detailStyle.wrapperProduct}>
              <button
                className={detailStyle.backButton}
                onClick={() => router.back()}
              >
                <IoIosArrowBack />
              </button>
            </div>
            <button
              className={detailStyle.buttonLike}
              onClick={() => setLike(!like)}
            >
              {!like ? <AiOutlineHeart /> : <AiFillHeart />}
            </button>

            <Image
              className="imgProduct"
              src={product?.image}
              width={450}
              height={450}
              alt="Landscape picture"
            />
          </>
        ) : (
          <div className="placeholder"></div>
        )}
      </div>
      <div className={detailStyle.detailProductDesc}>
        <h3 className={detailStyle.titleProduct}>{product?.title}</h3>
        <p className={detailStyle.priceProduct}>${product?.price}</p>
        <div className={detailStyle.description}>
          <p> {product?.description}</p>
          <ul className={detailStyle.moreInfo}>
            {moreInfo.map((bahan, index) => (
              <li key={index}>{bahan}</li>
            ))}
          </ul>
        </div>
        <div className={detailStyle.actionMenu}>
          <button className={detailStyle.actionButton}>
            <AiOutlineShopping className={detailStyle.shopIcon} />
            Buy Now
          </button>
          <button className={detailStyle.actionButton}>
            <AiOutlineShoppingCart />
            Chart
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
