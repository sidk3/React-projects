import React from 'react'
import ReactDOM from 'react-dom'
import imgsrc from './react-icon-small.jpg'
function Navbar()
{
    return (
        <div>
        <nav>
            <img src={imgsrc} alt="React-icon-image" className='nav--icon'/>
            <h3 className='nav--logo'>React Facts</h3>
            <h4 className='nav--text'>React-Practice</h4>
        </nav>
        </div>
    )
}

export default Navbar