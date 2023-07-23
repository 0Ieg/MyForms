import { FC, useState } from "react";
import styled from "styled-components";
import logo from '../../../BLL/images/all_instruments.svg'
import description from '../../../BLL/images/all_instruments_description.svg'
import { Link } from "react-router-dom";

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
.statusAndPayment{
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  justify-content: center;
  .status, .payment{
    background-color: inherit;
    cursor: pointer;
    display: flex;
    gap: 6px;
    svg{
      width: 16px;
      fill: #d60000;
    }
    .title{
      font-size: 12px;
      transition: color 0.05s linear;
      &:hover{
        color: #d60000;
      }
    }
  }

}
.profile{
  .profile__button{
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    :hover{
      color: #d60000;
    }
    svg{
      width: 24px;
      fill: #d60000;
    }
    span{
      font-weight: 700;
      font-size: 16px;
    }
  }
  .profile__menu{
    position: absolute;
    z-index: 5;
    width: 268px;
    height: 366px;
    padding: 6px;
    margin-top: 12px;
    box-shadow: 0 0 6px grey;
    border-radius: 8px;
    background-color: white;
    font-size: 16px;
    .menu__item a{
      display: block;
      padding: 6px 10px;
      border-radius: 4px;
      transition: background-color 0.05s linear;
      :hover:not(.menu__item_add a){
        background-color: #d6d5d5;
      }
    }
    .menu__item_title{
      padding: 6px 10px;
      display: flex;
      gap: 6px;
      cursor: default;
      svg{
        fill: red;
        width: 16px;
      }
    }
    .menu__item_add a{
      display: flex;
      gap: 6px;
      transition: color 0.05s linear;
      svg{
        width: 12px;
        transition: fill 0.05s linear;
      }
      :hover{
        color: #d60000;
        svg{
          fill: #d60000;
        }
      }
    }
    .exit{
      margin-bottom: 6px;
    }
    .my_organizations{
      padding: 12px 0 2px 10px;
      font-size: 13px;
      color: #666;
      border-top: 1px #bfbfbf solid;
    }
    .tax_deducation{
      margin: 6px 8px 8px 8px;
      padding: 8px;
      background-color: #f5f5f5;
      border-radius: 8px;
      font-size: 13px;
    }
  }
}
.none{
  display: none;
}
`

export const MiddleHeader:FC = ()=>{
  const [isActive, setIsActive] = useState(false)
  const moveHandler = ()=>{
    isActive?setIsActive(false):setIsActive(true)
  }
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
          <span className="title">Проверить статус заказа</span>
        </button>
        <Link to={'#'} className="payment">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13.102 13.104H8.92v1.703h3.606a1 1 0 1 1 0 2H8.92v3.25a1 1 0 1 1-2 0v-3.25H6a1 1 0 1 1 0-2h.92v-1.703H6a1 1 0 1 1 0-2h.92V4.786c0-1.018.825-1.843 1.842-1.843h4.34a5.08 5.08 0 1 1 0 10.161Zm-4.182-2v-6.16h4.182a3.08 3.08 0 1 1 0 6.16H8.92Z"></path>
          </svg>
          <span className="title">Оплатить заказ онлайн</span>
        </Link>
      </div>
      <div className="profile" onMouseEnter={moveHandler} onMouseLeave={moveHandler}>
        <button className="profile__button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 11.5c-1.1 0-2.042-.392-2.825-1.175C8.392 9.542 8 8.6 8 7.5s.392-2.042 1.175-2.825C9.958 3.892 10.9 3.5 12 3.5s2.042.392 2.825 1.175C15.608 5.458 16 6.4 16 7.5s-.392 2.042-1.175 2.825C14.042 11.108 13.1 11.5 12 11.5Zm-6 8c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 4 17.5v-.8c0-.567.146-1.088.438-1.563A2.914 2.914 0 0 1 5.6 14.05a14.866 14.866 0 0 1 3.15-1.163A13.776 13.776 0 0 1 12 12.5c1.1 0 2.183.129 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.475.438.996.438 1.563v.8a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 18 19.5H6Z"></path>
          </svg>
          <span>Здравствуйте, Олег</span>
        </button>
        <ul className={isActive?"profile__menu":"profile__menu none"}>
          <li className="menu__item menu__item_title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 11.5c-1.1 0-2.042-.392-2.825-1.175C8.392 9.542 8 8.6 8 7.5s.392-2.042 1.175-2.825C9.958 3.892 10.9 3.5 12 3.5s2.042.392 2.825 1.175C15.608 5.458 16 6.4 16 7.5s-.392 2.042-1.175 2.825C14.042 11.108 13.1 11.5 12 11.5Zm-6 8c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 4 17.5v-.8c0-.567.146-1.088.438-1.563A2.914 2.914 0 0 1 5.6 14.05a14.866 14.866 0 0 1 3.15-1.163A13.776 13.776 0 0 1 12 12.5c1.1 0 2.183.129 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.475.438.996.438 1.563v.8a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 18 19.5H6Z"></path>
            </svg>
            <span>Олег</span>
          </li>
          <li className="menu__item">
            <Link to={'#'}>Мой кабинет</Link>
          </li>
          <li className="menu__item">
            <Link to={'#'}>Личные данные</Link>
          </li>
          <li className="menu__item">
            <Link to={'#'}>Мои организации</Link>
          </li>
          <li className="menu__item">
            <Link to={'#'}>Мои заказы</Link>
          </li>
          <li className="menu__item">
            <Link to={'#'}>Избранное</Link>
          </li>
          <li className="menu__item exit">
            <Link to={'#'}>Выход</Link>
          </li>
          <li className="menu__item my_organizations">
            <span>Мои организации</span>
          </li>
          <li className="menu__item menu__item_add">
            <Link to={'#'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
              <span>Добавить новую организацию</span>
            </Link>
          </li>
          <li className="menu__item tax_deducation">
            <span>Заказывайте как юрлицо и получайте вычет до 20% НДС</span>
          </li>
        </ul>
      </div>
      <nav className="menu">

      </nav>
    </MiddleHeaderStyled>
  )
}


