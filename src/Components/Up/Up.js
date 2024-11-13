import React, { useEffect } from 'react'
import {useState} from "react";
import {TheSpan} from './Style'

function Up() {

    const[Show ,setShow] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', function(){
            if(window.scrollY > 400){
                setShow(!Show)
            }else{
                setShow(Show)
            }
        })
    } , [])


const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
          });
};    

  return (
    <div>
        <TheSpan onClick={scrollToTop} style={{display:Show ? 'block': 'none'}}>Up</TheSpan>
    </div>
  )
}

export default Up