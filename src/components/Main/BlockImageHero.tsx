import imageDesktop1 from '../../assets/images/desktop-image-hero-1.jpg';
import imageMobile1 from '../../assets/images/mobile-image-hero-1.jpg';
import imageDesktop2 from '../../assets/images/desktop-image-hero-2.jpg';
import imageMobile2 from '../../assets/images/mobile-image-hero-2.jpg';
import imageDesktop3 from '../../assets/images/desktop-image-hero-3.jpg';
import imageMobile3 from '../../assets/images/mobile-image-hero-3.jpg';
import Picture from '../UI/Picture';
import ButtonSquareAngle from '../UI/ButtonSquareAngle';
import '../../styles/Main/BlockImageHero.scss';

type Props = {
  currentSlide: number;
  slideRightHandler: () => void;
  slideLeftHandler: () => void;
  className?: string;
};

const BlockImageHero = (props: Props) => {
  const { currentSlide, slideRightHandler, slideLeftHandler, className } =
    props;

  return (
    <div className={`block-image-hero ${className}`}>
      <div className="block-image-hero__slider--wrapper">
        <div
          className={`block-image-hero__slider block-image-hero__slider--${currentSlide}`}
        >
          <Picture
            srcDesktop={imageDesktop1}
            srcMobile={imageMobile1}
            alt="Image with chairs"
          />
          <Picture
            srcDesktop={imageDesktop2}
            srcMobile={imageMobile2}
            alt="Image with chairs"
          />
          <Picture
            srcDesktop={imageDesktop3}
            srcMobile={imageMobile3}
            alt="Image with chairs"
          />
        </div>
      </div>
      <div className="block-image-hero__buttons">
        <ButtonSquareAngle angle="left" onClick={slideLeftHandler} />
        <ButtonSquareAngle angle="right" onClick={slideRightHandler} />
      </div>
    </div>
  );
};

export default BlockImageHero;
