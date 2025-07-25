import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props){
return(
    <div > 
      
        
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-Link active" aria-current="page" style={{textDecoration:'none'}} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" style={{textDecoration:'none'}}to="/About">About</Link>
        </li>
          </ul>
      <div className='d-flex'>
        <div className='bg-primary rounded mx-2' style={{height:'30px',width:'30px'}}></div>
      </div>
        <div className="form-check form-switch">
  <input className={`form-check-input text-${props.mode==='light'?'dark':'light'}`} onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
    <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="switchCheckDefault">Dark Mode</label>
</div>
        
    
    </div>
  </div>
</nav>

    </div>
);
}


