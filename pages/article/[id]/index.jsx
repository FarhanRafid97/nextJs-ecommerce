import React from 'react';
import articleStyle from '../../../styles/Article.module.css';
import Link from 'next/link';

const article = ({ article }) => {
  return (
    <>
      <div className={articleStyle.card}>
        <h3 className={articleStyle.title}>{article.title}</h3>
        <p>{article.body}</p>
      </div>
      <Link href="/">Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
