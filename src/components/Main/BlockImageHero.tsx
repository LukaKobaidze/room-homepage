import { useEffect, useState } from 'react';
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
  className?: string;
};

const BlockImageHero = ({ className }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => {
        if (prevSlide === 2) {
          return 0;
        }
        return (prevSlide += 1);
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const slideRightHandler = () => {
    setCurrentSlide(prevSlide => {
      if (prevSlide === 2) {
        return 0;
      }
      return (prevSlide += 1);
    });
  };
  const slideLeftHandler = () => {
    setCurrentSlide(prevSlide => {
      if (prevSlide === 0) {
        return 2;
      }
      return (prevSlide -= 1);
    });
  };

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
