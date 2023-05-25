import { useRef, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import blinkBlock from '../assets/blinkBlock.png';
import block from '../assets/block.png';

function Toggle() {
  const { isActive, setIsActive } = useContext(ThemeContext);
  const toogle = useRef(null);

  const handleClick = () => {
    const clickTarget = toogle.current;
    if (isActive === false) {
      clickTarget.firstChild.className = 'duration-700 translate-x-full w-1/2';
      setIsActive(true);
      localStorage.setItem('data', JSON.stringify(true));
    } if (isActive === true) {
      clickTarget.firstChild.className = 'duration-700 translate-x-0 w-1/2';
      setIsActive(false);
      localStorage.setItem('data', JSON.stringify(false));
    }
  };

  return (
    <button
      id="toogle"
      ref={ toogle }
      type="button"
      className="bg-emerald-400 w-32 border-4"
      onClick={ handleClick }
    >
      <img
        src={ !isActive ? block : blinkBlock }
        alt=""
        className="w-3/2"
      />
    </button>
  );
}

export default Toggle;
