import React from 'react';
import {Link} from 'react-router-dom';



const Header = () => {
  return (
    <header className='header'>
      <nav className='navigation'>
        <ul className='nav_item'>
          <li className='link'><Link className='links' to="/">O mnie</Link></li>
          <li className='link'><Link className='links' to="/Kategorie">Kategorie</Link></li>
          <li className='link'><Link className='links' to="/Wywiady">Wywiady</Link></li>
          <li className='link'><Link className='links' to="/Kontakt">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;