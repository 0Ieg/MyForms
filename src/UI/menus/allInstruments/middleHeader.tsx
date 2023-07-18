import { FC } from "react";
import styled from "styled-components";
import logo from '../../../BLL/images/all_instruments.svg'
import description from '../../../BLL/images/all_instruments_description.svg'

const MiddleHeaderStyled = styled.div`
background-color: #5261ea;
height: 100px;
padding: 12px;
background-color: white;
display: flex;
.logo{
  width: 152px;
  height: 76px;
}
.description{
  width: 200px;
  height: 48px;
}
.phonesNumbers{
  .phoneNumber{
    color: #d60000;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
  .schedule{
    font-size: 12px;
    padding-top: 4px;
  }
}
`

export const MiddleHeader:FC = ()=>{
  return(
    <MiddleHeaderStyled>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="description">
        <img src={description} alt="" />
      </div>
      <div className="phonesNumbers">
        <div className="phoneNumber">+7 (812) 426-37-55</div>
        <div className="phoneNumber">8 800 550-37-55</div>
        <div className="schedule">Звонок бесплатный 05:00 – 22:00</div>
      </div>
      <div className="statusAndPayment">
        <button className="status">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M14.625 16.025a.918.918 0 0 0 .675.275c.267 0 .5-.1.7-.3a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7l-3-3V7.975a.928.928 0 0 0-.287-.7A.993.993 0 0 0 12 7a.967.967 0 0 0-.712.287A.968.968 0 0 0 11 8v3.975a1.03 1.03 0 0 0 .3.725l3.325 3.325ZM12 22a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.732 9.732 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.091 10.091 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2a9.74 9.74 0 0 1 3.9.787 10.106 10.106 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Zm0-2c2.217 0 4.104-.779 5.663-2.337C19.221 16.104 20 14.217 20 12s-.779-4.104-2.337-5.663C16.104 4.779 14.217 4 12 4s-4.104.779-5.662 2.337C4.779 7.896 4 9.783 4 12s.78 4.104 2.338 5.663C7.896 19.221 9.783 20 12 20Z"></path>
        </svg>
          <div className="title">Проверить статус заказа</div>
        </button>
        <button className="payment">
          <img src="#" alt="" />
          <div className="title">Оплатить заказ онлайн</div>
        </button>
      </div>
      <div className="profile">
        <button></button>
        <ul className="submenu">

        </ul>
      </div>
      <nav className="menu">

      </nav>
    </MiddleHeaderStyled>
  )
}