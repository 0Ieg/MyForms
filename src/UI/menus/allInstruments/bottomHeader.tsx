import { FC } from "react";
import styled from "styled-components";

const BottomHeaderStyled = styled.div`
background-color: #f5f5f5;
height: 56px;
padding: 12px;
position: sticky;
display: flex;
align-items: center;
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
`

export const BottomHeader:FC = ()=>{
  return(
    <BottomHeaderStyled>
      <ul className="catalog">
        Catalog
      </ul>
      <ul className="shares">
        shares
      </ul>
      <div className="search"></div>
      <div className="comparison">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6.4 9.2h.2c.77 0 1.4.63 1.4 1.4v7c0 .77-.63 1.4-1.4 1.4h-.2c-.77 0-1.4-.63-1.4-1.4v-7c0-.77.63-1.4 1.4-1.4ZM12 5c.77 0 1.4.63 1.4 1.4v11.2c0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4V6.4c0-.77.63-1.4 1.4-1.4Zm5.6 8c.77 0 1.4.63 1.4 1.4v3.2c0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4v-3.2c0-.77.63-1.4 1.4-1.4Z"></path>
          </svg>
          <span>Сравнение</span>
        </button>
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