import { AppProps } from 'next/app';
import layout from '../styles/Layout.module.css';

import Nav from './Navbar/Nav';
interface LayoutInterface {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutInterface> = ({ children }) => {
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
