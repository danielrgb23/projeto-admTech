import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import skiller from '../../assets/skiller.svg';

import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.container}>
     <div className={styles.logo}>
      <img src={logo}/>
      <h1>Truffle</h1>
     </div>
     <div className={styles.containerInput}>
      <img src={skiller} />
      <input className={styles.input} placeholder="Pesquise algo"/>
     </div>
     <div className={styles.containerBtn}>
      <NavLink to='/afiliados/create' className={styles.containerBtn}>
      <button className={styles.btn}>Novo colaborador</button>
      </NavLink>
     </div>
    </div>
  )
}