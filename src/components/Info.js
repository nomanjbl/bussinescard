import React from 'react'
import Logo from '../image/pic.jpg'
import '../style.css'

export default function Info() {
  return (
    <div>
      <img src={Logo} alt="img" />
      <h1 className="h1">Noman Memon</h1>
      <h2 className="h2">FrontEnd Developer</h2>
      <links className="links">
        <button className="glow-on-hover">Email</button>
        <button className="glow-on-hover">LinkdIn</button>
      </links>
    </div>
  )
}
