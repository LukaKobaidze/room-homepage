import Subtitle from '../UI/Subtitle';
import Text from '../UI/Text';
import '../../styles/Main/BlockTextAbout.scss';

type Props = {
  className?: string;
};

const BlockTextAbout = ({ className }: Props) => {
  return (
    <div className={`block-text-about ${className}`}>
      <div className="block-text-about--wrapper">
        <Subtitle>ABOUT OUR FURNITURE</Subtitle>
        <Text>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </Text>
      </div>
    </div>
  );
};

export default BlockTextAbout;
