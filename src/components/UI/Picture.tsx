import Image from './Image';

type Props = {
  srcDesktop: string;
  srcMobile: string;
  alt: string;
};

const Picture = ({ srcDesktop, srcMobile, alt }: Props) => {
  return (
    <picture>
      <source srcSet={srcMobile} media="(max-width: 375px)" />
      <Image src={srcDesktop} alt={alt} />
    </picture>
  );
};

export default Picture;
