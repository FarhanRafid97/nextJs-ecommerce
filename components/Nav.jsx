import Link from 'next/link';
import nav from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={nav.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
