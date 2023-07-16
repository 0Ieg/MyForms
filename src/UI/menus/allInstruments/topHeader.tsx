import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const TopHeaderStyled = styled.div`
background-color: #fff;
height: 36px;
.menu{
  display: flex;
  .item{
    height: 36px;
    padding: 8px 12px;
    background-color: inherit;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    .fill-red{
      width: 13px;
      fill: #d60000;
    }
  }
  .item:hover{
    color: #d60000;
  }
}
.receiptAndPayment .submenu, .serviceAndSupport .submenu{
  position: absolute;
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 0 6px gray ;
  .submenu__item a{
    display: inline-block;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    padding: 6px;
    transition: background-color 0.05s linear;
    font-size: 14px;
  }
  .submenu__item a:hover{
    background-color: #d6d5d5;
  }
}
.none{
  display: none;
}
`

export const TopHeader:FC = ()=>{
  const [RAPIsActive, setRAPIsActive] = useState(false)
  const RAPSubmenuHandler = ()=>{
    RAPIsActive?setRAPIsActive(false):setRAPIsActive(true)
  }
  const [SASIsActive, setSASIsActive] = useState(false)
  const SASSubmenuHandler = ()=>{
    SASIsActive?setSASIsActive(false):setSASIsActive(true)
  }
  return(
    <TopHeaderStyled>
      <ul className="menu">
        <li className="location">
          <button className="item">
            <svg className="fill-red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
            </svg>
            <span>Санкт-Петербург</span>
          </button>
        </li>
        <li className="stores">
          <button className="item">
            <svg className="fill-red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <span>77 магазинов</span>
          </button>
        </li>
        <li className="entity">
          <Link to='entity' className="item">
            <svg className="fill-red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
            </svg>
            <span>Покупать как юрлицо</span>
          </Link>
        </li>
        <li className="sell">
          <Link to='sell' className="item">
            <span>Продавать у нас</span>
          </Link>
        </li>
        <li className="receiptAndPayment">
          <button className="item" onMouseEnter={RAPSubmenuHandler} onMouseLeave={RAPSubmenuHandler}>
            <span>Получение и оплата</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          <ul className={RAPIsActive?"submenu":"submenu none"}>
            <li className="submenu__item">
              <Link to={'#'}>Доставка курьером</Link>
            </li>
            <li className="submenu__item">
              <Link to={'#'}>Доставка транспортной компанией</Link>
            </li>
            <li className="submenu__item">
              <Link to={'#'}>Самовывоз</Link>
            </li>
            <li className="submenu__item">
              <Link to={'#'}>Способы оплаты</Link>
            </li>
          </ul>
        </li>
        <li className="serviceAndSupport">
          <button  className="item">
            <span>Сервис и поддержка</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          <ul className={SASIsActive?"submenu":"submenu none"}>
            <li className="submenu__item">
              <Link to={'#'}>Обмен и возврат</Link>
            </li>
            <li className="submenu__item">
              <Link to={'#'}>Узнать статус обращения</Link>
            </li>
            <li className="submenu__item">
              <Link to={'#'}>Сопровождение оброщений</Link>
            </li>
            <li className="submenu__item">
              <Link to={'#'}>Ремонт и услуги</Link>
            </li>
            <li className="submenu__item">
              <Link to={'#'}>Сервисные центры производителей</Link>
            </li>
          </ul>
        </li>
        <li className="contacts">
          <Link to={'#'} className="item">Контакты</Link>
        </li>
      </ul>
    </TopHeaderStyled>
  )
}