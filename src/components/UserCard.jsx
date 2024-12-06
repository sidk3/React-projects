import React from 'react'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={props.image} alt="Image" style={props.style}></img>
      <p id="user-desc">Description of {props.desc}</p>
    </div>
  )
}

export default UserCard
