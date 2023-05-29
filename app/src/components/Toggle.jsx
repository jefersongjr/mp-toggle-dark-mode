import { useRef, useContext, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import blinkBlock from '../assets/blinkBlock.png';
import block from '../assets/block.png';
import audioFile from '../assets/Mario.mp3';

function Toggle() {
  const { isActive, setIsActive } = useContext(ThemeContext);
  const toogle = useRef(null);

  const playCoin = () => {
    const audioCoin = new Audio(audioFile);
    audioCoin.play();
  };

  useEffect(() => {
    const savedData = localStorage.getItem('darkMode');
    const clickTarget = toogle.current;
    const parsedActive = JSON.parse(savedData);
    if (savedData) {
      setIsActive(parsedActive);
      console.log(savedData);
    } if (parsedActive === true) {
      clickTarget.firstChild.className = 'translate-x-full w-1/2';
    }
  }, []);

  const handleClick = () => {
    const clickTarget = toogle.current;
    if (isActive === false) {
      clickTarget.firstChild.className = 'duration-700 translate-x-full w-1/2';
      playCoin();
      setIsActive(true);
      localStorage.setItem('darkMode', JSON.stringify(true));
    } if (isActive === true) {
      clickTarget.firstChild.className = 'duration-700 translate-x-0 w-1/2';
      playCoin();
      setIsActive(false);
      localStorage.setItem('darkMode', JSON.stringify(false));
    }
  };

  return (
    <button
      id="toogle"
      ref={ toogle }
      type="button"
      className={ `${!isActive ? 'bg-blue-900' : 'bg-red-500'} w-32 rounded-lg` }
      onClick={ handleClick }
    >
      <img
        src={ !isActive ? block : blinkBlock }
        alt=""
        className="w-1/2"
      />
    </button>
  );
}

export default Toggle;
