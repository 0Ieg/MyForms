import { FC } from "react";
import styled from "styled-components";

const MiddleHeaderStyled = styled.div`
background-color: #5261ea;
height: 100px;
padding: 12px;
background-color: white;
`

export const MiddleHeader:FC = ()=>{
  return(
    <MiddleHeaderStyled>
      <div className="logo"></div>
      <div className="phoneNumbers"></div>
      <div className="statusAndPayment"></div>
      <div className="profile">
        <button></button>
        <ul className="submenu">
          
        </ul>
      </div>

    </MiddleHeaderStyled>
  )
}