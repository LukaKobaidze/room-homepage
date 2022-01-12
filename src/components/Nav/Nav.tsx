import { useState } from 'react';
import useViewportDimensions from '../../hooks/useViewportDimensions';
import IconHamburger from '../UI/Icons/IconHamburger';
import NavLogo from './NavLogo';
import NavList from './NavList';
import '../../styles/Nav/Nav.scss';

const Nav = () => {
  const { width: viewportWidth } = useViewportDimensions();
  const [showNavList, setShowNavList] = useState(false);

  const showNavListHandler = () => {
    setShowNavList(true);
  };

  const hideNavListHandler = () => {
    setShowNavList(false);
  };

  return (
    <nav className="nav">
      {viewportWidth <= 600 && (
        <button className="nav__icon-hamburger" onClick={showNavListHandler}>
          <IconHamburger />
        </button>
      )}
      <NavLogo />
      <NavList showNavList={showNavList} onHideNavList={hideNavListHandler} />
    </nav>
  );
};

export default Nav;
