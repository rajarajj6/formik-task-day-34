import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <NavLink to="/" className={"btn"}><button className='btnt'>Table</button></NavLink>
      <NavLink to="/addinput" className={"btn"}><button className='btna'>Add Data</button></NavLink>
    </div>
  )
}

export default Header;