import { FC } from "react";
import styled from "styled-components";
import { Input } from "./input";
import { useForm } from "react-hook-form";

const SignUpFormsStyled = styled.div`
height: 100%;
background-color: #f4f4f4;
border-radius: ${({theme})=>theme.borrad.base};
padding: ${({theme})=>theme.gaps.large};
transition: ${({theme})=>theme.trans.base};
display: grid;
justify-items: center;
align-items: center;
.form{
  background-color: white;
  width: 460px;
  padding: 40px;
  border-radius: ${({theme})=>theme.borrad.base};
}
.legend{
font-size: 22px;
font-weight: 700;
color: #333;
}
.information{
  background:linear-gradient(0deg, rgba(84, 142, 170, 0.12), rgba(84, 142, 170, 0.12)),#fff;
  margin-top: 16px;
  display: grid;
  grid-template-columns: 80px 1fr;
  padding: 14px 20px;
  font-size: 15px;
  line-height: 20px;
  color: #333;
}
.form__btn{
  width: 100%;
  height: 48px;
  background-color: #558cb7;
  color: white;
  cursor: pointer;
  opacity: 0.5;
  font-size: 15px;
}
.label, .services__title{
  margin: 31px 0 16px;
  font-weight: 700;
}
`
export const SignUpForm:FC = ()=>{
  const {register, formState:{errors, isValid}, handleSubmit, reset} = useForm({mode:'onTouched'})
  const formHandler = (data:any)=>{
    console.log(data)
    reset()
  }
  return(
    <SignUpFormsStyled>
      <form className="form" onSubmit={handleSubmit(formHandler)}>
      <fieldset className="fieldset">
        <div className="legend">
          <legend>Регистрация</legend>
        </div>
        <div className="information">
          <div className="information__icon"></div>
          <div className="information__text">Зарегистрируйте Хабр Аккаунт, чтобы вступить в крупнейшее русскоязычное IT-сообщество, учиться и делиться опытом, всегда быть в курсе того, что происходит в IT.</div>
        </div>
        <div className="services">
          <div className="services__title">C помощью сервиса</div>
          <div className="services__icons"></div>
        </div>
        <div className="label">
          <label htmlFor="habr/email">E-mail</label>
        </div>
        <div className="form__email">
          <Input id="habr/email" isError={true} type="email" {...register('email')}/>
        </div>
        <div className="label">
          <label htmlFor="habr/nickname">Никнейм</label>
        </div>
        <div className="form__nickname">
          <Input id="habr/nickname" isError={true} type="text" {...register('nickname')}/>
        </div>
        <div className="label">
          <label htmlFor="habr/password">Пароль</label>
        </div>
        <div className="form__password">
          <Input id="habr/password" isError={true} type="password" {...register('password')}/>
        </div>
        <div className="label">
          <label htmlFor="habr/password/repeat">Пароль ещё раз</label>
        </div>
        <div className="form__password_repeat">
          <Input id="habr/password/repeat" isError={true} type="password" {...register('password/repeat')}/>
        </div>
        <button className="form__btn" disabled={!isValid}>Зарегистрироваться</button>
      </fieldset>
      </form>
    </SignUpFormsStyled>
  )
}