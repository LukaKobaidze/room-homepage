import '../../styles/UI/Title.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: Props) => {
  return <h1 className={`title ${className}`}>{children}</h1>;
};

export default Title;
