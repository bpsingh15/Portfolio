import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
      const timeout = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
  
      return () => clearTimeout(timeout);
    }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p>
            Thank you for your interest in getting in touch! I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by selecting one of the options below!.
          </p>

          <a href="mailto:brijpaulsingh@hotmail.com" className="icon-link">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          </a>



        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
