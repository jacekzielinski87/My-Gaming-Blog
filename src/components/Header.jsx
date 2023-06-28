import React from 'react';
import {Link} from 'react-router-dom';



const Header = () => {
  return (
    <header className='header'>
      <nav className='navigation'>
        <ul className='nav_item'>
          <li className='links'><Link className='link' to="/">O mnie</Link></li>
          <li className='links'><Link className='link' to="/Kategorie">Kategorie</Link></li>
          <li className='links'><Link className='link' to="/Wywiady">Wywiady</Link></li>
          <li className='links'><Link className='link' to="/Kontakt">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;