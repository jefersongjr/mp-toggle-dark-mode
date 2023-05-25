import { useContext, useEffect } from 'react';
import ghost from '../assets/ghost.png';
import boo from '../assets/openEyesBoo.png';
import backMario from '../assets/backMario.png';
import frontMario from '../assets/fM.png';
import ThemeContext from '../context/ThemeContext';
import Header from '../components/Header';

function Home() {
  const { isActive, setIsActive } = useContext(ThemeContext);

  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      const parsedActive = JSON.parse(savedData);
      setIsActive(parsedActive);
    }
  }, []);

  return (
    <div>
      <Header />
      <main
        className="flex min-h-screen"
      >
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
