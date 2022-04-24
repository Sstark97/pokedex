import Menu from '../Menu';
import { ChildrenProps } from '../../types/global.type';
import './styles.css';

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Menu />
      <div className='Layout-content'>{children}</div>
    </div>
  );
};

export default Layout;