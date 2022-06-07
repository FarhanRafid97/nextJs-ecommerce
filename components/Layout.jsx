import layout from '../styles/Layout.module.css';
import Footer from './Footer/Footer';

import Nav from './Navbar/Nav';
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={layout.container}>
        <main className={layout.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
