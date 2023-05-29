import { useContext } from 'react';
import ghost from '../assets/ghost.png';
import boo from '../assets/openEyesBoo.png';
import backMario from '../assets/backMario.png';
import frontMario from '../assets/fM.png';
import ThemeContext from '../context/ThemeContext';
import Header from '../components/Header';

function Home() {
  const { isActive } = useContext(ThemeContext);

  return (
    <div>
      <Header />
      <main
        className={ `flex h-screen 
            ${isActive ? 'bg-red-900' : 'bg-red-500'} justify-center items-center` }
      >
        <div
          className={ `flex w-full h-80 
                ${isActive ? 'bg-blue-950' : 'bg-amber-200'} justify-evenly items-center
                rounded-lg md:justify-center w-3/5 h-3/5 
                ` }
        >
          {
            (!isActive
              ? <img src={ ghost } alt="fantasma escondido" className="w-1/2" />
              : <img src={ boo } alt="fantasma" className="w-1/2 md:justify-self-end" />)
          }
          {
            (!isActive
              ? <img src={ backMario } className="w-32 h-32" alt="Mario" />
              : <img src={ frontMario } alt="Mario" className="w-32 h-32" />)
          }
        </div>

      </main>

    </div>
  );
}

export default Home;
