import '../../styles/Nav/NavListItem.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const NavListItem = ({ children, className }: Props) => {
  return (
    <li className={`nav-list-item ${className}`}>
      <button className="nav-list-item--link">{children}</button>
    </li>
  );
};

export default NavListItem;
