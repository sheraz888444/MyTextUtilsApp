import React from 'react';

export default function About() {
  let myStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    borderRadius: '8px'
  };

  return (
    <div className="container my-4" style={myStyle}>
      <h1 className="mb-4">About TextUtils</h1>
      <p>
        <strong>TextUtils</strong> is a powerful and user-friendly text manipulation utility designed to help users efficiently process, analyze, and transform their text data. Whether you're a developer, writer, or student, TextUtils offers a suite of intuitive tools to perform common text operations such as:
      </p>
      <ul>
        <li>Converting text to uppercase or lowercase</li>
        <li>Removing extra spaces</li>
        <li>Copying text with a single click</li>
        <li>Counting words and characters</li>
        <li>Estimating reading time</li>
      </ul>
      <p>
        The app features a responsive, clean UI with light/dark mode support for better accessibility and user experience. It is built with modern React practices and is optimized for performance.
      </p>
      <hr />
      <p className="mt-4">
        <em>Developed with passion and precision by <strong>Sheraz Ahmed</strong>, this application aims to simplify everyday text processing tasks for users across various domains.</em>
      </p>
    </div>
  );
}
