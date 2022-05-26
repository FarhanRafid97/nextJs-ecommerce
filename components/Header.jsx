import headerStyle from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={headerStyle.container}>
      <h3 className={headerStyle.title}>
        <span>WElcome</span> To my Page
      </h3>
      <p className={headerStyle.description}>
        Keep up the update news from web dev
      </p>
    </div>
  );
};

export default Header;
