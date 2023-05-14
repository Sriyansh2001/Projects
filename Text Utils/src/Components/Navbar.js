import React , {useState} from 'react';
import {Link} from "react-router-dom";

export default function Navbar(props) {

  const make_change = () => {
    var val = document.getElementById("select_option").value;
    props.change_color_to(val);
  }

  return (
    <div>
      <nav className='nav'>
        <span className='switchtextarea'>
          Enable {props.mode=="Dark"?"Light":"Dark"} mode
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
          <button onClick={make_change}>Make Theme</button>
        </span>
        <span className='list'>
          <b style={{fontSize:"18px"}}>Text Utils</b> &nbsp;
          <Link to='/' className='item'>Home</Link>
          <Link to='#' className='item'>Contact</Link>
          <Link to='#' className='item'>Helpline</Link>
          <Link to='/about' className='item'>About</Link>
        </span>
      </nav>
    </div>
  )
}
