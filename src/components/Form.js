import React, { useState } from 'react';

export function Form(props) {
  const [text, setText] = useState('');

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
const handlelowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleclear = () => {
    let newText=" ";
    setText(newText);
  };
   const handlecopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text Copied to clipboard");
    
  };



  
  return (
    <>
    <div className="container my-4">
      <h2 className="mb-3">{props.heading}</h2>

      <div className="mb-3">
        <textarea
          className="form-control"
          rows="8"
          placeholder=" "
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
<button className="btn btn-primary mx-1" onClick={handleUpperCase}>
       Uppercase
      </button>

      <button className="btn btn-primary mx-1" onClick={handlelowerCase}>
       LowerCase
     </button>
      <button className="btn btn-primary mx-1" onClick={handleclear}>
      Clear 
     </button>
      <button className="btn btn-primary mx-1" onClick={handlecopy}>
      Copy 
     </button>
<div className='container'>
    <h2>Text Summery </h2>
    <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words</p>
    <p>{text.length} characters</p>
     <p>{0.008 * text.split(' ').length} Minuites to read</p>


</div>
     
    </div>
    </>
    
  );
}

export default Form;
