import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BottomHeaderStyled = styled.div`
background-color: #f5f5f5;
height: 56px;
padding: 12px;
position: sticky;
display: flex;
align-items: center;
overflow: visible;
.catalog{
  button{
    display: flex;
    align-items: center;
    gap: 12px;
    width: 320px;
    height: 44px;
    background-color: #666;
    padding: 10px 16px;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    transition: background-color 0.05s linear;
    svg{
      width: 24px;
      fill: white;
    }
    span{
      color: white;
      font-size: 18px;
      font-weight: 500;
    }
    :hover{
      background-color: #4c4c4c;
    }
  }
  .catalog__list{
    position: absolute;
    padding: 16px 12px 16px 8px;
    border: 1px solid #dcdcdc;
    border-radius: 0 0 6px 6px;
    .catalog__item{
      height: 40px;
      padding: 8px 12px;
      border-radius: 6px;
      cursor: pointer;
      display: grid;
      grid-template-columns: 34px 1fr 16px;
      transition: all 0.05s linear;
      :hover{
        background-color: #f5f5f5;
      }
      .rightIcon{
        width: 16px;
        fill: #d60000;
      }
    }
  }
}
.shares{
  padding: 8px;
  button{
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    svg{
      width: 24px;
      fill: #d60000;
    }
    span{
      font-size: 16px;
      font-weight: 700;
      transition: color 0.05s linear;
    }
    :hover span{
      color: #d60000;
    }
  }
  .shares__list{
    position: absolute;
    top: 48px;
    z-index: 5;
    padding: 6px;
    box-shadow: 0 0 6px grey;
    border-radius: 8px;
    background-color: white;
    .shares__item a{
      display: block;
      padding: 6px 10px;
      border-radius: 4px;
      transition: background-color 0.05 linear;
      :hover{
        background-color: #d6d5d5;
      }
    }
  }
}
.comparison button, .favorite{
  background-color: transparent;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  svg{
    width: 24px;
    fill: #d60000;
  }
  span{
    transition: color 0.05s linear;
    font-size: 14px;
  }
  :hover{
      color: #d60000;
  }
}
.comparison{
  position: relative;
  overflow: visible;
  .comparison__list{
    position: absolute;
    left: -85%;
    z-index: 5;
    box-shadow: 0 0 6px gray;
    width: 350px;
    padding: 20px;
    border-radius: 8px;
    background-color: white;
    text-align: center;
  }
}
.basket{
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  svg{
    width: 24px;
    fill: #d60000;
  }
  span{
    transition: color 0.05s linear;
    font-size: 18px;
    font-weight: 700;
  }
  :hover{
      color: #d60000;
  }
}
.none{
  display: none;
}
`

export const BottomHeader:FC = ()=>{

  const [isShares, setIsShares] = useState(false)
  const sharesHandler = ()=>{
    isShares?setIsShares(false):setIsShares(true)
  }
  const [isComparison, setIsComparison] = useState(false)
  const comparisonHandler = ()=>{
    isComparison?setIsComparison(false):setIsComparison(true)
  }
  return(
    <BottomHeaderStyled>
      <ul className="catalog">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4 18a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 17c0-.283.096-.52.288-.712A.965.965 0 0 1 4 16h16c.283 0 .52.096.712.288A.965.965 0 0 1 21 17c0 .283-.096.52-.288.712A.965.965 0 0 1 20 18H4Zm0-5a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 12c0-.283.096-.521.288-.713A.967.967 0 0 1 4 11h16a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 20 13H4Zm0-5a.967.967 0 0 1-.712-.287A.968.968 0 0 1 3 7c0-.283.096-.521.288-.713A.967.967 0 0 1 4 6h16a.97.97 0 0 1 .712.287c.192.192.288.43.288.713a.968.968 0 0 1-.288.713A.967.967 0 0 1 20 8H4Z"></path>
          </svg>
          <span>Каталог товаров</span>
        </button>
        <ul className="catalog__list">
          <li className="catalog__item">
            <LeftIcon/>
            <span>Инструменты</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Электрика и свет</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Сантехника и инженерные системы</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Ручной инструмент</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Автотовары</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Все для дома</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Крпёж и фурнитура</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Отделочные и стройматериалы</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Офис и дом</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Спорт и туризм</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Станки и промкомпоненты</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Климат и отопление</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Склад</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Клининговое оборудование</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Строительное оборудование</span>
            <RightIcon/>
          </li>
          <li className="catalog__item">
            <LeftIcon/>
            <span>Расходка, спецодежда и СИЗ</span>
            <RightIcon/>
          </li>
        </ul><span></span>
        
      </ul>
      <div className="shares" onMouseEnter={sharesHandler} onMouseLeave={sharesHandler}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7.5 11a3.372 3.372 0 0 1-2.475-1.025A3.372 3.372 0 0 1 4 7.5c0-.967.342-1.792 1.025-2.475A3.372 3.372 0 0 1 7.5 4c.967 0 1.792.342 2.475 1.025A3.372 3.372 0 0 1 11 7.5c0 .967-.342 1.792-1.025 2.475A3.372 3.372 0 0 1 7.5 11Zm0-2c.417 0 .77-.146 1.062-.438C8.854 8.271 9 7.917 9 7.5c0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 7.5 6c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 6 7.5c0 .417.146.77.438 1.062.291.292.645.438 1.062.438Zm9 11a3.372 3.372 0 0 1-2.475-1.025A3.372 3.372 0 0 1 13 16.5c0-.967.342-1.792 1.025-2.475A3.372 3.372 0 0 1 16.5 13c.967 0 1.792.342 2.475 1.025A3.372 3.372 0 0 1 20 16.5c0 .967-.342 1.792-1.025 2.475A3.372 3.372 0 0 1 16.5 20Zm0-2c.417 0 .77-.146 1.062-.438.292-.291.438-.645.438-1.062 0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 16.5 15c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 15 16.5c0 .417.146.77.438 1.062.291.292.645.438 1.062.438ZM4.7 19.3a.948.948 0 0 1-.275-.7.95.95 0 0 1 .275-.7L17.9 4.7a.948.948 0 0 1 .7-.275.95.95 0 0 1 .7.275.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7L6.1 19.3a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275Z"></path>
          </svg>
          <span>Акции</span>
        </button>
        <ul className={isShares?"shares__list":"shares__list none"}>
          <li className="shares__item">
            <Link to={'#'}>Навигатор скидок</Link>
          </li>
          <li className="shares__item">
            <Link to={'#'}>Товары месяца</Link>
          </li>
          <li className="shares__item">
            <Link to={'#'}>Распродажа</Link>
          </li>
          <li className="shares__item">
            <Link to={'#'}>Лови момент</Link>
          </li>
          <li className="shares__item">
            <Link to={'#'}>Скидка для своих</Link>
          </li>
          <li className="shares__item">
            <Link to={'#'}>Стримы</Link>
          </li>
          <li className="shares__item">
            <Link to={'#'}>Наши акции</Link>
          </li>
        </ul>
      </div>
      <div className="search"></div>
      <div className="comparison" onMouseEnter={comparisonHandler} onMouseLeave={comparisonHandler}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6.4 9.2h.2c.77 0 1.4.63 1.4 1.4v7c0 .77-.63 1.4-1.4 1.4h-.2c-.77 0-1.4-.63-1.4-1.4v-7c0-.77.63-1.4 1.4-1.4ZM12 5c.77 0 1.4.63 1.4 1.4v11.2c0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4V6.4c0-.77.63-1.4 1.4-1.4Zm5.6 8c.77 0 1.4.63 1.4 1.4v3.2c0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4v-3.2c0-.77.63-1.4 1.4-1.4Z"></path>
          </svg>
          <span>Сравнение</span>
        </button>
        <ul className={isComparison?"comparison__list":"comparison__list none"}>
          <li className="comparison__item">В сравнении пока ничего нет</li>
        </ul>
      </div>
      <div className="favorite">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="m10.65 20.312-1.725-1.575a68.234 68.234 0 0 1-4.787-4.813C2.713 12.333 2 10.58 2 8.662c0-1.566.525-2.875 1.575-3.925 1.05-1.05 2.358-1.575 3.925-1.575a5.73 5.73 0 0 1 2.5.562c.783.376 1.45.888 2 1.538a5.962 5.962 0 0 1 2-1.538 5.721 5.721 0 0 1 2.5-.562c1.567 0 2.875.525 3.925 1.575C21.475 5.787 22 7.096 22 8.662c0 1.917-.708 3.675-2.125 5.275a59.863 59.863 0 0 1-4.825 4.825l-1.7 1.55c-.383.35-.833.525-1.35.525-.517 0-.967-.175-1.35-.525Z"></path>
        </svg>
        <span>Избранное</span>
      </div>
      <div className="basket">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8 22c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 6 20c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 8 18c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.021-.588 1.413A1.925 1.925 0 0 1 8 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 16 20c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 18 18c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.021-.587 1.413A1.928 1.928 0 0 1 18 22ZM8 17c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L7.6 11.6 4 4H2.975a.926.926 0 0 1-.7-.288A.99.99 0 0 1 2 3c0-.283.096-.521.288-.713A.967.967 0 0 1 3 2h1.625c.183 0 .358.05.525.15a.93.93 0 0 1 .375.425L6.2 4h14.75c.45 0 .758.167.925.5.167.333.158.683-.025 1.05l-3.55 6.4a2.034 2.034 0 0 1-.725.775A1.93 1.93 0 0 1 16.55 13H9.1L8 15h11.025c.283 0 .517.096.7.287.183.192.275.43.275.713s-.096.52-.288.712A.965.965 0 0 1 19 17H8Z"></path>
        </svg>
        <span>{`${'24 550'} р.`}</span>
      </div>
    </BottomHeaderStyled>
  )
}


const RightIcon:FC = ()=>{
  return(
    <svg className="rightIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  )
}


const LeftIcon:FC = ()=>{
  return(
    <svg className="leftIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="m2.68 7.676 6.49-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Zm5.71-2.858a.5.5 0 1 0-.708.707.5.5 0 0 0 .707-.707ZM6.974 6.939a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707ZM5.56 8.354a.5.5 0 1 0-.707-.708.5.5 0 0 0 .707.708Zm2.828 2.828a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707Zm1.414-2.121a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707Zm1.414-.707a.5.5 0 1 0-.706-.708.5.5 0 0 0 .707.708Zm-4.242.707a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707Zm1.414-.707a.5.5 0 1 0-.707-.708.5.5 0 0 0 .707.708Zm1.414-2.122a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707ZM8.646 3.354l4 4 .708-.708-4-4-.708.708Zm-1.292 9.292-4-4-.708.708 4 4 .708-.708Z"/>
    </svg>
  )
}