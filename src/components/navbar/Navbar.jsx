import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import bag from '../../assets/bag.png'
import Cart from '../cart/Cart';
import { Link } from 'react-router-dom';

function Navbar(props) {

  function openSideBar(){
    const event = new CustomEvent('openSideBar');
    window.dispatchEvent(event);
  }

  return (<div className='navbar'>
    <Link to='/'>
      <img src={logo} className='logotipo' alt="LogoTipo" />
    </Link>

  {
    props.showMenu &&

    <div className='menu'>
        <Link to='/historico'>Histórico</Link>
        <button className='btn btn-red' onClick={openSideBar}>
            <img src={bag} className='icon'/>
            Sacola
        </button>
    </div>
  }

    <Cart/>
  </div>
  )
}

export default Navbar;