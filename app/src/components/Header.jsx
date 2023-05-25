import { useContext } from 'react';
import Toggle from './Toggle';
import ThemeContext from '../context/ThemeContext';

function Header() {
  const { isActive } = useContext(ThemeContext);

  return (
    <header
      className={ `flex items-center w-full h-24 
      ${isActive ? 'bg-blue-950' : 'bg-amber-200'} justify-center` }
    >
      <Toggle />
    </header>
  );
}

export default Header;
