import { createPortal } from 'react-dom';
import '../../styles/UI/Backdrop.scss';

type Props = {
  opacity?: number;
  onClick?: () => void;
};

const Backdrop = ({ opacity, onClick }: Props) => {
  return createPortal(
    <div
      className="backdrop"
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity || 0.5})` }}
      onClick={onClick}
    />,
    document.getElementById('backdrop') as HTMLDivElement
  );
};

export default Backdrop;
