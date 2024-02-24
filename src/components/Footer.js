import React from 'react'
import "./Footer.css";
export default function Footer() {
    return (
        <div className='contact' id='contact'>
            <div className="developer-details">
                <h1>Designed and Developed By <br></br>Abhay Chauhan</h1>
                <a href="https://github.com/CHIEFXIX/" target='_blank' rel="noreferrer"><img src={require('../images/github-logo.png')} alt="" /></a>
            </div>
            <div className="company">
                <h1>Developed for Atlan <br></br>The Leading Third-Gen Data Catalog</h1>
                <a href="https://atlan.com" target='_blank' rel="noreferrer"><img src={require('../images/atlan.png')} alt="" /></a>
            </div>
        </div>
    )
}
