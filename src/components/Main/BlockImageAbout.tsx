import Image from '../UI/Image';

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const BlockImageAbout = ({ src, alt, className }: Props) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt} />
    </div>
  );
};

export default BlockImageAbout;
