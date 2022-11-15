import React from 'react';
import {RiPencilLine} from 'react-icons/ri'
import { Header } from '../../../../components/Header';
import { Sidebar } from '../../../../components/Sidebar';
import styles from './styles.module.scss';

export function ShowAfiliados() {
 return (
  <div className={styles.container}>
    <Header />

    <div className={styles.content}>
      <Sidebar />
      <div className={styles.components}>
       <div className={styles.background}>
         <table className={styles.table}>
          <thead className={styles.thead}>
           <tr>
            <th>Afiliado</th>
            <th>E-mail</th>
            <th>Data de cadastro</th>
            <th>Genero</th>
            <th></th>
           </tr>
          </thead>
          <tbody className={styles.tbody}>
           <tr>
            <td>
             <p>Daniel Augusto</p>
            </td>
            <td>
             <p>danielrgb2@gmail.com</p>
            </td>
            <td>
             <p>03/12/2002</p>
            </td>
            <td>
             <p>Masculino</p>
            </td>

            <td>
             <button> <RiPencilLine size='16px' />Editar</button>
            </td>
           </tr>
          </tbody>
         </table>
       </div>
      </div>
      </div>
    </div>
)
}