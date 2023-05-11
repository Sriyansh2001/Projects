import './App.css';
import NavBar from './Components/Navbar'
import Textform from './Components/textform';
import React , {useState} from 'react';

function App() {
  const style = {
    container: {
      padding:'0px 50px',
      height:'100%',
      // border:'3px solid cyan'
    },
  };
  const [visibility_mode,change_visibility_mode] = useState("Light");

  // change_background_color
  const toggle_visiblity_mode = () => {
    if(visibility_mode==='Dark') {
      change_visibility_mode("Light");
      console.log("here");
      document.body.style.backgroundColor = "white";
    }
    else {
      change_visibility_mode("Dark");
      document.body.style.backgroundColor = "rgb(15, 11, 11)";
    }
  }


  return (
    <>
    <div>
      <NavBar mode={visibility_mode} toggle_visiblity_mode = {toggle_visiblity_mode}/>
      <div style={style.container}> 
          <Textform heading="Text Application" strong="Start Writing in the text area" mode={visibility_mode}/>
      </div>
    </div>
    </>
  );
}

export default App;
