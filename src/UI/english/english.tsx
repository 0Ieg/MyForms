import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { withSuspense } from "../commons/hocs";

const LazyNumbers = lazy(()=>import("./numbers"))
const Numbers = withSuspense(LazyNumbers)

const LazyDictionary = lazy(()=>import("./dictionary"))
const Dictionary = withSuspense(LazyDictionary)

const EnglishStyled = styled.div`
height: 100%;
`
export const English:FC = ()=>{
  return(
    <EnglishStyled>
      <Routes>
        <Route path="numbers" element={<Numbers/>}/>
        <Route path="dictionary" element={<Dictionary/>}/>
      </Routes>
    </EnglishStyled>
  )
}