import React, { useState, useEffect } from 'react';
import "./Homepage.css"

// Define generateRandomLetters outside of the component
function generateRandomLetters(length) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
  }
  return randomString;
}

export default function Homepage({scrollToComponent}) {
  const finalHeading = "ENGINEERING UNLEASHING ARTIFICIAL INTELLIGENCE";
  const [progress, setProgress] = useState(0);
  const [randomLetters, setRandomLetters] = useState(generateRandomLetters(finalHeading.length));

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < finalHeading.length) {
        const newLetters =
          randomLetters.substring(0, progress) +
          finalHeading[progress] +
          generateRandomLetters(finalHeading.length - progress - 1);
        setProgress(progress + 1);
        setRandomLetters(newLetters);
      }
    }, 10);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 400);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [progress, finalHeading, randomLetters]);

  return (
    <>
      <div className="Homepage" id='home'>
        <div className="nav">
          <ul>
            <li onClick={() => scrollToComponent('home')}>Home</li>
            <li onClick={() => scrollToComponent('aimodels')}>AI Models</li>
            <li onClick={() => scrollToComponent('bottom')}>Add Models</li>
            <li onClick={() => scrollToComponent('contact')}>Contact</li>
          </ul>
        </div>
        <div className="bodycontainer">
          <div className="left">
            <div className="heading">
              <h1>{randomLetters}</h1>
            </div>
          </div>
          <div className="right">
          </div>
        </div>
      </div>
      <div className="scrollnav">
        <p>Learn More About AI Models</p>
        <div className="arrowcss">
          <i className="arrow down"></i>
        </div>
      </div>
    </>
  );
}
