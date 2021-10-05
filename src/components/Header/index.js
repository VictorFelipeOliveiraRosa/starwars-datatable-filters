import React from 'react';
import SearchBar from '../SearchBar';

function Header() {
  return (
    <header className="container bg-galaxy  bg-gradient__galaxy">
      <h1 className="text-center m-1 font-poller">Star Wars Planets Search</h1>
      <SearchBar />
    </header>
  );
}

export default Header;
