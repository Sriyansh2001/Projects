import React , {useState} from 'react';

export default function Navbar(props) {
  return (
    <div>
      <nav className='nav'>
        <span className='switchtextarea'>
          Enable {props.mode} mode
        </span>
        <span className='switcharea'>
          <input type='checkbox' onChange={props.toggle_visiblity_mode} className='switch' id='switch'></input>
        </span>
        <span className='list'>
          <a href='#' className='item'>Home</a>
          <a href='#' className='item'>Contact</a>
          <a href='#' className='item'>Helpline</a>
          <a href='#' className='item'>About</a>
        </span>
      </nav>
    </div>
  )
}
