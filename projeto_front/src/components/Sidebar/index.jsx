import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';


export function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <li className={styles.searchbox}>
          <button type="button" className={styles.btnprimary}>
            <NavLink to=''>
              Página inicial
            </NavLink>
          </button>
        </li>
      </div>
    </div >
  )
}