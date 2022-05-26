import articleStyle from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const Article = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      {articles.map((article, index) => (
        <ArticleItem article={article} key={index} />
      ))}
    </div>
  );
};

export default Article;
