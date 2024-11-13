import styled from "styled-components"
import { Link } from "react-router-dom"

export const All = styled.div`
display: flex;
justify-content: space-between;
align-items: center; 
padding: 20px 0 10px;
`

export const UlList = styled.ul`
align-items: center;
margin-bottom: 0;
list-style: none;

@media (max-width: 767px){
  position: absolute;
  z-index: 1;
  top: 49px;
  right: 4px;
  background-color: white;
  padding: 15px 25px 15px 0px;
}

// @media (min-width: 768px){
//   display: flex;
//   background-color: transparent;
//   margin-top: 10px;
//   justify-content: flex-end;
//   width: 95vw;
// }
`

export const LiList = styled.li`
margin: 0px 15px;
cursor: pointer;
position: relative;
&:before{
  content: "";
  position: absolute;
  bottom: -1px;
  width: 0;
  height: 2px;
  /* background: red; */
  background: #507900;
  left: 0;
  transition: .3s;
}
&:hover{
  &:before{
    width: 100%;
  }
}

@media (max-width: 767px){
  &:not({
    &:first-child{
      padding-top: 10px;
    }
  })
  &::before{
    content: "";
        bottom: -1px;
        width: 0;
        height: 2px;
        background: #507900;
        left: 0;
        transition: .3s;
  }
}
` 

export const LinkAnchor = styled(Link)`
cursor: pointer;
position: relative;
text-decoration: none;
width: fit-content;
color: black;
`

export const Olaicon = styled.i`
font-size: 20px;
margin-bottom: -15px;


@media (min-width: 768px) {
    display: none;
}

@media (max-width: 767px){
  &:hover{
    color: #507900;
    & + &{
      display: block;
    }
  }
}
`