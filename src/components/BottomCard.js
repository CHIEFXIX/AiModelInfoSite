import React from 'react'
import "./BottomCard.css"
export default function BottomCard() {
  return (
    <>
    <div className="bottomcard" id='bottom'>
        <div className="top">
            <h1>Wanna show your AI MODEL to the World? 🌍</h1>
            <p>Fill the form and let the world know about you </p>
        </div>
        <div className="addmodelform">
            <form action="">
                <label htmlFor="name">Model Name</label>
                <input type="text" id='name' />
                <p></p>
                <label htmlFor="desc">Model Description</label>
                <textarea id="desc"rows="50" cols="50"/>
                <label htmlFor="imglink">Model Image Link</label>
                <input type="text" id='imglink'/>
                <button>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}
