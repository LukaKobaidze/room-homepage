import '../../styles/UI/Subtitle.scss';

type Props = {
  children: React.ReactNode;
};

const Subtitle = ({ children }: Props) => {
  return <h2 className="subtitle">{children}</h2>;
};

export default Subtitle;
