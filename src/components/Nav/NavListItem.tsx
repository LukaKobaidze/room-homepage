import '../../styles/Nav/NavListItem.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const NavListItem = ({ children, className }: Props) => {
  return (
    <li className={`nav-list-item ${className}`}>
      <a className="nav-list-item--link" href="#">
        {children}
      </a>
    </li>
  );
};

export default NavListItem;
