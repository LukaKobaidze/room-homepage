import IconAngleLeft from './Icons/IconAngleLeft';
import IconAngleRight from './Icons/IconAngleRight';
import '../../styles/UI/ButtonSquareAngle.scss';

type Props = {
  angle: 'left' | 'right';
  onClick?: () => void;
};

const ButtonSquareAngle = ({ angle, onClick }: Props) => {
  return (
    <button className="button-square-angle" onClick={onClick}>
      {angle === 'left' && <IconAngleLeft />}
      {angle === 'right' && <IconAngleRight />}
    </button>
  );
};

export default ButtonSquareAngle;
