import Title from '../UI/Title';
import Text from '../UI/Text';
import ButtonTextArrow from '../UI/ButtonTextArrow';
import '../../styles/Main/BlockTextMain.scss';

type Props = {
  className?: string;
};

const BlockTextMain = ({ className }: Props) => {
  return (
    <div className={`block-text-main ${className}`}>
      <div className={'block-text-main__content'}>
        <Title className={'block-text-main__content--title'}>
          Discover innovative ways to decorate
        </Title>
        <Text>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </Text>
        <ButtonTextArrow className="block-text-main--button">
          SHOP NOW
        </ButtonTextArrow>
      </div>
    </div>
  );
};

export default BlockTextMain;
