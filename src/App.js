

import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import React ,{useState} from 'react'
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null); //alert is object

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  
const toggleMode =()=>{
  if(mode==='dark'){
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode is Enable", "success");
    document.title='TexUtils-Dark Mode';
  }
  else{
    setMode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode is Enable", "success");
    document.title='TexUtils-Light Modee';

  } 
    
}

  return (
  <>
  <Router>
<Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode} />
{/* <Navbar /> */}
<Alerts alert={alert}/>
<div className="container my-2">
  <Routes>
          <Route excat path="/aboutUs" element={<AboutUs/>}>
          </Route>
          <Route excat path="/"  element={<TextForm showAlert={showAlert}  heading="Enter the text" mode={mode} />} >
          </Route>
  </Routes>
</div>
</Router>
  </>
  );
}

export default App;
