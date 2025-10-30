import React from 'react';

const Header: React.FC = () => {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).replace(/ (\d{4})$/, ',$1');
  return (
    <header className="App-header flex justify-between items-center p-20 text-white">
      <h1 className='font-[Montserrat] font-bold text-2xl'>Ohiwemeh's Portfoilo</h1>
      <h1 className='font-[Montserrat] font-medium text-[18px]'>{today}</h1>
    </header>
  )};

export default Header;
    
