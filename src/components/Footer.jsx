import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footerContent'>
        <p className='rightsAdnotations'>
        Copyright © 2023 by Gandi<br></br>
        Wszelkie prawa zastrzeżone.
        Żadne fragmenty niniejszej strony lub jej treść nie
        mogą być kopiowane i powielane bez zgody właściciela praw autorskich.
        </p>
        <a className='socialsIcons' href="https://www.facebook.com/gandi_sobie_pogrywa">
          <FontAwesomeIcon icon = {faFacebook} />
        </a>
            <a className='socialsIcons' href="https://www.facebook.com/GandiSobiePogrywa">
          <FontAwesomeIcon icon = {faInstagram}/>
          </a>
          <a className='socialsIcons' href="https://twitter.com/zielinski_87">
          <FontAwesomeIcon icon = {faTwitter}/>
          </a>
          <a className='socialsIcons' href="https://www.youtube.com/channel/UCZDkxjpje2wWiomFQbNf70Q">
          <FontAwesomeIcon icon = {faYoutube}/>
          </a>
        </div>
    </footer>
  );
};

export default Footer;