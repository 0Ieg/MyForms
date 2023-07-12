import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopHeaderStyled = styled.div`
background-color: #69ea52;
height: 36px;
`

export const TopHeader:FC = ()=>{
  return(
    <TopHeaderStyled>
      <ul className="menu">
        <li className="menu__item">
          <button className="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
            </svg>
            <span>Санкт-Петербург</span>
          </button>
        </li>
        <li className="menu__item">
          <button className="stores">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <span>77 магазинов</span>
          </button>
        </li>
        <li className="menu__item">
          <Link to='entity' className="entity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
            </svg>
            <span>Покупать как юрлицо</span>
          </Link>
        </li>
        <li className="menu__item">
          <Link to='sell'>
            <span>Продавать у нас</span>
          </Link>
        </li>
        <li className="menu__item">
          <button className="receiptAndPayment">
            <span>Получение и оплата</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          <ul className="submenu">
            <li className="submenu__item">Доставка курьером</li>
            <li className="submenu__item">Доставка транспортной компанией</li>
            <li className="submenu__item">Самовывоз</li>
            <li className="submenu__item">Способы оплаты</li>
          </ul>
        </li>
        <li className="menu__item"></li>
        <li className="menu__item"></li>
      </ul>
    </TopHeaderStyled>
  )
}