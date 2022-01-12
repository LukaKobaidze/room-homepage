import '../../styles/UI/Image.scss';

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const Image = ({ src, alt, className }: Props) => {
  return <img src={src} alt={alt} className={`image ${className}`} />;
};

export default Image;
