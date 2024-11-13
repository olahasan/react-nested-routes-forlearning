import React from 'react'
// import { Link } from 'react-router-dom';
import { All , Olaicon , UlList , LiList , LinkAnchor} from './Style.js'
import {useState} from "react"

function Header() {

  const[Visible, setVisible] = useState(false)
  const handleClick =() => {
    setVisible(!Visible)
    // setVisible(console.log(!false))
    // console.log("yyyyy")
  }

  return (
<div>
    <All >
      <Olaicon onClick={handleClick}>&times;</Olaicon>
      <UlList className="ola">
        <LiList><LinkAnchor to="/">Home</LinkAnchor></LiList>
        <LiList><LinkAnchor to="/About">About</LinkAnchor></LiList>
        <LiList><LinkAnchor to="/Menu">Menu</LinkAnchor></LiList>
        <LiList><LinkAnchor to="/Contact">Contact</LinkAnchor></LiList>
      </UlList>
    </All>

    <style jsx>{`
              .ola{
                display: ${ Visible ? 'inline' : 'none'};
              }

              @media (min-width: 768px){
                  .ola{
                    display: flex;
                  }
              }
           `}</style>

</div>
    
  )
}

export default Header