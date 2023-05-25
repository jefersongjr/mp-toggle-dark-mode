import { useRef, useContext, useEffect } from 'react';
import ghost from '../assets/ghost.png';
import boo from '../assets/openEyesBoo.png';
import backMario from '../assets/backMario.png';
import frontMario from '../assets/fM.png';
import blinkBlock from '../assets/blinkBlock.png';
import block from '../assets/block.png';
import ThemeContext from '../context/ThemeContext';

function Home() {
  const { isActive, setIsActive } = useContext(ThemeContext);
  const toogle = useRef(null);

  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      const parsedActive = JSON.parse(savedData);
      setIsActive(parsedActive);
    }
  }, []);

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
    <div>
      <header className="w-full h-16 bg-red-500">
        <p className="text-blue-600">
          Olá Toogle. tudo bem com vcs
        </p>
      </header>
      <main
        className="flex min-h-screen"
      >
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
        <div className="flex w-full h-2/5 bg-blue-900 justify-center">
          {
            (!isActive
              ? <img src={ ghost } alt="fantas" />
              : <img src={ boo } alt="fantas" className="animate-bounce" />)
          }
          {
            (!isActive
              ? <img src={ backMario } className="w-28 h-28" alt="Mario" />
              : <img src={ frontMario } alt="Mario" className="w-28 h-28" />)
          }
        </div>

      </main>

    </div>
  );
}

export default Home;
