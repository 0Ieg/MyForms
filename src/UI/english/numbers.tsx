import { FC } from "react";
import styled from "styled-components";

const NumbersStyled = styled.div`
background-color: #d4d3d3;
height: 100%;
.header{
  font-size: 32px;
  font-weight: 500;
  padding: 9px;
  letter-spacing: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e2e2;
}

`
export const Numbers:FC = ()=>{
  return(
    <NumbersStyled>
      <header className="header">{'This is a random number generator'||'Это генератор рандомных чисел'}</header>
    </NumbersStyled>
  )
}