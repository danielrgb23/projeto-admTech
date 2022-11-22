import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';


export function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        
        <li>
          <button type="button" className={styles.btnprimeiro}>
            <NavLink to=''>
            <font-awesome-icon icon="fa-regular fa-house" /> Página inicial
            </NavLink>
          </button>
          </li>
            
            <li>
          <button type="button" className={styles.btnprimeiro}>
            <NavLink to=''>
              Revendedores
            </NavLink>
          </button>
          </li>

          <li>
          <button type="button" className={styles.btnprimeiro}>
            <NavLink to=''>
              Caixa
            </NavLink>
          </button>
          </li>

          <li>
          <button type="button" className={styles.btnprimeiro}>
          <NavLink to=''>
            Produtos
          </NavLink>
        </button>
        </li>
        
        <li>
        <button type="button" className={styles.btnprimeiro}>
            <NavLink to=''>
              Anotações
            </NavLink>
          </button>
          </li>
      </div>
    </div >
  )
}