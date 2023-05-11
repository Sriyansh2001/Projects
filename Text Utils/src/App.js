import './App.css';
import NavBar from './Components/Navbar'
import Textform from './Components/textform';
import React , {useCallback, useState} from 'react';
import Alert from './Components/Alert';

function App() {
  const style = {
    container: {
      padding:'0px 50px',
      height:'100%',
      // border:'3px solid cyan'
    },
  };
  const [visibility_mode,change_visibility_mode] = useState("Light");
  const [active,change_active] = useState(false);
  const [alert_window_detail,fnc_alert_window_detail] = useState("Dark");

  const toggle_alert_window=(msg)=>{ 
    change_active(true);
    fnc_alert_window_detail(msg);
    // setTimeout(() => {
    //   close_alert_window();
    // }, 1500);
  }

  const close_alert_window=()=>{
    change_active(false);
  }

  // change_background_color
  const toggle_visiblity_mode = () => {
    if(visibility_mode==='Dark') {
      change_visibility_mode("Light");
      console.log("here");
      document.body.style.backgroundColor = "white";
      toggle_alert_window("Light Mode Enabled");
    }
    else {
      change_visibility_mode("Dark");
      document.body.style.backgroundColor = "rgb(15, 11, 11)";
      toggle_alert_window("Dark Mode Enabled");
    }
  }

  return (
    <>
    <div>
      <NavBar mode={visibility_mode} toggle_visiblity_mode = {toggle_visiblity_mode} toggle_alert_window={toggle_alert_window}/>
      <Alert active={active} close_alert_window={close_alert_window} alert_detail={alert_window_detail}/>
      <div style={style.container}> 
          <Textform heading="Text Application" strong="Start Writing in the Text Area" mode={visibility_mode} toggle_alert_window={toggle_alert_window}/>
      </div>
    </div>
    </>
  );
}

export default App;
