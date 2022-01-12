import useViewportDimensions from '../../hooks/useViewportDimensions';
import Backdrop from '../UI/Backdrop';
import IconClose from '../UI/Icons/IconClose';
import NavListItem from './NavListItem';
import '../../styles/Nav/NavList.scss';

type Props = {
  showNavList: boolean;
  onHideNavList: () => void;
};

const NavList = ({ showNavList, onHideNavList }: Props) => {
  const { width: viewportWidth } = useViewportDimensions();
  console.log(viewportWidth);
  return (
    <div
      className={`nav-list--wrapper ${
        showNavList ? 'nav-list--wrapper--active' : ''
      }`}
    >
      {viewportWidth <= 600 && (
        <>
          <button className="nav-list--close" onClick={onHideNavList}>
            <IconClose />
          </button>
          {showNavList && <Backdrop onClick={onHideNavList} />}
        </>
      )}
      <ul className="nav-list">
        <NavListItem>home</NavListItem>
        <NavListItem>shop</NavListItem>
        <NavListItem>about</NavListItem>
        <NavListItem>contact</NavListItem>
      </ul>
    </div>
  );
};

export default NavList;
