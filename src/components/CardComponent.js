import React, { useState } from 'react';
import "./CardComponent.css";
const CardComponent = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleclick = () => {
    setClicked(!clicked);
  }
  return (
    <>
      {clicked && (
        <div className="popup">
          <div className="popupdata">
            <div className="popupNavbar">
              <h1>{props.title}</h1>
              <button onClick={handleclick}>&#x2715;</button>
            </div>
            <div className="popupBottom">
              <img src={props.bgimage} alt={props.title} />
              <p>{props.desc}</p>
            </div>

          </div>
        </div>
      )}
      <div className="card">
        <img src={props.bgimage} alt={props.title} />
        <p>{props.title}</p>
        <button onClick={handleclick}>Learn More</button>
      </div>
    </>
  );
};

export default CardComponent;