import React , {useState} from 'react';

export default function Navbar(props) {
  
  const make_change = () => {
    var val = document.getElementById("select_option").value;
    props.change_color_to(val);
  }

  return (
    <div>
      <nav className='nav'>
        <span className='switchtextarea'>
          Enable {props.mode} mode
        </span>
        <span className='switcharea'>
          <input type='checkbox' onChange={props.toggle_visiblity_mode} className='switch' id='switch'></input>
        </span>
        <span className='switcharea'>
          <select className="select_option" id="select_option">
            <option>Blue</option>
            <option>Green</option>
            <option>Red</option>
            <option>Purple</option>
          </select>
          <button onClick={make_change}>Make Change</button>
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
