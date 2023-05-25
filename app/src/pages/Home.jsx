import { useState, useRef } from 'react';
import ghost from '../assets/ghost.png';
import boo from '../assets/openEyesBoo.png';
import backMario from '../assets/backMario.png';
import frontMario from '../assets/fM.png';

function Home() {
  const [isActive, setIsActive] = useState(false);
  const toogle = useRef(null);

  const handleClick = () => {
    const clickTarget = toogle.current;
    if (isActive === false) {
      clickTarget.firstChild.className = 'duration-700 translate-x-full w-1/2';
      setIsActive(true);
    } if (isActive === true) {
      clickTarget.firstChild.className = 'duration-700 translate-x-0 w-1/2';
      setIsActive(false);
    }
  };

  return (
    <div>
      <header className="w-full h-16 bg-emerald-400">
        <p className="text-blue-600">
          Olá Toogle. tudo bem com vcs
        </p>
      </header>
      <main
        className="min-h-screen"
      >
        <button
          id="toogle"
          ref={ toogle }
          type="button"
          className="bg-emerald-400 w-32 border-4"
          onClick={ handleClick }
        >
          <img
            src="https://i.pinimg.com/originals/27/f1/58/27f158bddbafc4aeaad4c381a79d1b6f.png"
            alt=""
            className="w-1/2"
          />
        </button>
        <div className="flex w-full h-2/5 bg-cyan-600 justify-center">
          {
            (!isActive
              ? <img src={ ghost } alt="fantas" />
              : <img src={ boo } alt="fantas" className="animate-bounce" />)
          }
          {
            (!isActive
              ? <img src={ backMario } className="w-28 h-28" alt="mario" />
              : <img src={ frontMario } alt="fantas" className="w-28 h-28" />)
          }
        </div>

      </main>

    </div>
  );
}

export default Home;
