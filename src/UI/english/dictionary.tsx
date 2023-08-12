import { FC } from "react";
import styled from "styled-components";

const DictionaryStyled = styled.div`
background-color: #22272e;
height: 100%;
display: flex;
flex-direction: column;
.header{
  height: 50px;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#e7e2e2;
  margin-bottom: 10px;
  border-radius: 6px;
}
.navigation{
  height: 50px;
  border-radius: 6px 6px 0 0;
  background-color:#e7e2e2;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
}
.main{
  flex-grow: 1;
  background-color: #fff;
}
.footer{
  height: 50px;
  border-radius: 0 0 6px 6px;
  background-color:#e7e2e2;
}
`

const Dictionary:FC = ()=>{
  return(
    <DictionaryStyled>
      <header className="header">Dictionary</header>
      <nav className="navigation">Navigation</nav>
      <main className="main">Main</main>
      <footer className="footer">Footer</footer>
    </DictionaryStyled>
  )
}
export default Dictionary