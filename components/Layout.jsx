import layout from '../styles/Layout.module.css';
import Header from './Header';
import Nav from './Nav';
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={layout.container}>
        <main className={layout.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
