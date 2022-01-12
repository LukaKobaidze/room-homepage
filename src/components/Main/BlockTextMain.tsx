import Title from '../UI/Title';
import Text from '../UI/Text';
import ButtonTextArrow from '../UI/ButtonTextArrow';
import data from '../../data/data.json';
import '../../styles/Main/BlockTextMain.scss';

type Props = {
  currentSlide: number;
  className?: string;
};

const BlockTextMain = ({ currentSlide, className }: Props) => {
  return (
    <div className={`block-text-main ${className}`}>
      <div className={'block-text-main__content'}>
        <Title className={'block-text-main__content--title'}>
          {data[currentSlide].title}
        </Title>
        <Text>{data[currentSlide].description}</Text>
        <ButtonTextArrow className="block-text-main--button">
          SHOP NOW
        </ButtonTextArrow>
      </div>
    </div>
  );
};

export default BlockTextMain;
