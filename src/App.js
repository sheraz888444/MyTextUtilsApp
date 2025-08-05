//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
function App() {
const [mode,setmode]=useState('light');
const toggleMode=()=>{
  if(mode==='light'){
setmode('dark');
document.body.style.backgroundColor='#042743'
document.body.style.color='white'
document.title='Textutils App -Dark Mode'

    }  else{
setmode('light');
document.body.style.backgroundColor='white';
document.body.style.color='black'
document.title='Textutils App -Light Mode'



  }
}



  return (
   <>
  
  
  
  
  <Router>
      <Navbar title="my app" mode={mode} toggleMode={toggleMode} /> 
      
      
      <Routes>     {/* switch is exchange with routes in new version of react router */}
        <Route path="/" element={<Form heading="Enter a Text To Analyze:"/>} />     {/* Default page  */}
         <Route path="/About" element={<About />} />  
    
      </Routes> 
    </Router>
 </>
  );

}


export default App;
 //<button className="btn btn-primary" onClick={handleUpperCase}>
    //    Convert to Uppercase
   //   </button>

    //  <button className="btn btn-primary" onClick={handlelowerCase}>
     //   Convert to LowerCase
     // </button>
