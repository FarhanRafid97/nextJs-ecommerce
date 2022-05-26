import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Article from '../components/Article';
import styles from '../styles/Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProduk } from '../src/redux/actions/product';

export default function Home({ articles }) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.product);
  console.log(data);
  useEffect(() => {
    dispatch(getDataProduk());
  }, []);
  return (
    <div className={styles.container}>
      <h3>Welcome TO next App</h3>
      <Article articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
