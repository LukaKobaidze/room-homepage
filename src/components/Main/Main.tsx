import { useEffect, useState } from 'react';
import BlockImageHero from './BlockImageHero';
import BlockTextMain from './BlockTextMain';
import BlockTextAbout from './BlockTextAbout';
import BlockImageAbout from './BlockImageAbout';
import imageDark from '../../assets/images/image-about-dark.jpg';
import imageLight from '../../assets/images/image-about-light.jpg';
import '../../styles/Main/Main.scss';

const Main = () => {
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
    <main className="main">
      <div className="main__block main__block--1">
        <BlockImageHero
          className="main__block__hero"
          currentSlide={currentSlide}
          slideRightHandler={slideRightHandler}
          slideLeftHandler={slideLeftHandler}
        />
        <BlockTextMain
          className="main__block__text-main"
          currentSlide={currentSlide}
        />
      </div>
      <div className="main__block main__block--2">
        <BlockImageAbout
          className="main__block__img-about"
          src={imageDark}
          alt="Furniture"
        />
        <BlockTextAbout className="main__block__text-about" />
        <BlockImageAbout
          className="main__block__img-about"
          src={imageLight}
          alt="White chair"
        />
      </div>
    </main>
  );
};

export default Main;
