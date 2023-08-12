import { FC } from "react";
import styled from "styled-components";

const NumbersStyled = styled.div`
background-color: #22272e;
height: 100%;
.header{
  height: 50px;
  margin-bottom: 10px;
  border-radius: 6px;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e2e2;
  display: flex;
  align-items: center;
  justify-content: center;
}
`
const Numbers:FC = ()=>{
  return(
    <NumbersStyled>
      <header className="header">{'This is a random number generator'||'Это генератор рандомных чисел'}</header>
    </NumbersStyled>
  )
}
export default Numbers