import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Numbers } from "./numbers";

const EnglishStyled = styled.div`
height: 100%;
`
export const English:FC = ()=>{
  return(
    <EnglishStyled>
      <Routes>
        <Route path="numbers" element={<Numbers/>}/>
      </Routes>
    </EnglishStyled>
  )
}