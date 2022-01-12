import IconArrow from './Icons/IconArrow';
import '../../styles/UI/ButtonTextArrow.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ButtonTextArrow = ({ children, className }: Props) => {
  return (
    <button className={`button-text-arrow ${className}`}>
      {children} <IconArrow className="button-text-arrow--icon" />
    </button>
  );
};

export default ButtonTextArrow;
