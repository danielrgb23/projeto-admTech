import React, { useState } from 'react';
import { BsGoogle, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import backgroundTrufado from '../../assets/backgroundTrufado.jpg';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

export function Signin() {

 const [showPassword, setShowPassword] = useState(false)

 const Show = (param) => {
  setShowPassword(param)
 }

 return (
  <div className={styles.container}>
   <div className={styles.img}>
    <img src={backgroundTrufado} alt='trufas' />
   </div>
   <div className={styles.content}>
    <div className={styles.form}>
     <header>Bem vindo(a)!</header>
     <div className={styles.icons}>
      <span>{<BsGoogle color='#f98b10' size='30px' style={{ cursor: 'pointer' }} />}</span>
      <span>{<BsFacebook color='#5091dd' size='30px' style={{ cursor: 'pointer' }} />}</span>
      <span>{<BsLinkedin color='#004f93' size='30px' style={{ cursor: 'pointer' }} />}</span>
     </div>
     <div className={styles.inputs}>
      <input 
      className={styles.inputEmail} 
      type='email' 
      placeholder="E-mail" 
      value='equipePk@gmail.com'
      />
      <div className={styles.containerPassword}>
       <input
        className={styles.inputPassword}
        type={showPassword === true ? 'text' : 'password'}
        placeholder='Senha'
        value='Me contrata'
       />
       <button className={styles.submit_lente} type='button' onClick={() => Show(!showPassword)}>
        {showPassword === true ? <AiFillEye size='18px' color="#BDBDBD" /> : <AiFillEyeInvisible size='18px' color="#BDBDBD" />}
       </button>
      </div>

      {/* <input className={styles.inputSenha} type='password' placeholder="Senha" /> */}
     </div>
     <NavLink to='/home' className={styles.btnNav}>
     <button className={styles.btn}>Entrar</button>
     </NavLink>
    </div>
   </div>
  </div>
 )
}