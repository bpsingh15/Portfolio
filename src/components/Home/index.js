import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import PaulLogoTitle from '../../assets/images/logo-b.png';
import "./index.scss";
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['r', 'i', 'j', '-', 'P', 'a', 'u', 'l', ','];
  const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r','.'];



  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br /> 
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={PaulLogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={18} />
          </h1>
          <h2>Computer Science, 2026 at McGill University </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home;
