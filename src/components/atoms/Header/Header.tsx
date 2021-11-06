import styles from './Header.module.scss';

interface IHeaderProps {
  text: string;
  priority: number;
}
const Header: React.FC<IHeaderProps> = ({ text, priority }) => {
  const HeaderComponent = `h${priority}` as keyof JSX.IntrinsicElements;

  return (
    <HeaderComponent className={styles[`header${priority}`]}>
      {text}
    </HeaderComponent>
  );
};

export default Header;
