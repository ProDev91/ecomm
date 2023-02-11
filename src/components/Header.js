import React from 'react'
import { Link } from 'react-router-dom'
import '../App.scss'

export default function () {
  return (
    <div className='header'>
        <div className="header__logo">
            <Link to={'/'}>JP</Link>
        </div>
        <div className="header__links">
            <Link to={'/about'}>About</Link>
            <Link to={'/pictures'}>Pictures</Link>
            <Link to={'/terms-of-sale'}>Terms Of Sale</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    </div>
  )
}
