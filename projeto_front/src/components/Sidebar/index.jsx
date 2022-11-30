import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import styles from './styles.module.scss';


export function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>

          <button type="button" className={styles.btnprimeiro}>
            <NavLink to='/home'>
              <AiOutlineHome size='22'/> Página inicial
            </NavLink>
          </button>

          <button type="button" className={styles.btnprimeiro}>
            <NavLink to='/afiliados'>
              <BsFillPersonLinesFill size='22'/>Revendedores
            </NavLink>
          </button>
      </div>
    </div >
  )
}