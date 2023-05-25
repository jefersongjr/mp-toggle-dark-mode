import { useState, useRef } from 'react';

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
        <div className="w-full h-2/5 bg-cyan-600">
          <img
            src="https://thumbs.gfycat.com/LikelyReadyDinosaur-max-1mb.gif"
            className="paused"
            alt="dsds"
          />
        </div>
        <div className="w-full h-2/5 ">
          { }
        </div>

      </main>

    </div>
  );
}

export default Home;
