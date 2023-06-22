import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footerContent'>
        <a href="https://www.facebook.com/gandi_sobie_pogrywa">
          <FontAwesomeIcon icon = {faFacebook} />
        </a>
            <a href="https://www.facebook.com/GandiSobiePogrywa">
          <FontAwesomeIcon icon = {faInstagram}/>
          </a>
          <a href="https://twitter.com/">
          <FontAwesomeIcon icon = {faTwitter}/>
          </a>
        </div>
    </footer>
  );
};

export default Footer;