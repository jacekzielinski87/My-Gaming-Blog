import React from 'react';


const Header = () => {
  return (
    <header>
      <nav className='navigation'>
        <ul className='header'>
            <li className='nav_item'><a className='text' href="/Newsy">STRONA GŁÓWNA</a></li>
            <li className='nav_item'><a className='text' href="/Recenzje">RECENZJE</a></li>
            <li className='nav_item'><a className='text'href="/Artykuły">ATYKUŁY</a></li>
            <li className='nav_item'><a className='text'href="/O mnie">O MNIE</a></li>
            <li className='nav_item'><a className='text'href="/Kontakt">KATEGORIE</a></li>
        </ul>
        <h1 className='title'>Gandi Geek</h1>
        <h2 className='title_text'>Fan gamingu oraz popkultury</h2>
      </nav>
    </header>
  );
};

export default Header;