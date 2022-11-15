import React from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import styles from './styles.module.scss';

export function Dashboard() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Sidebar />

        <div className={styles.text}>
          <h1>Gerencie seus <br/> revendedores/afiliados com <br/> nossa ferramenta!</h1>
        </div>

      </div>
        <div className={styles.more}>
          <h1>Quem nós somos?</h1>
          <p>Para trazer conveniência e simplicidade de 
            lidar com as contas e com os revendedores de 
            pequenas franquias, atendemos com um
            sistema de gestão de pessoas e finanças</p>
        </div>
    </div>
  )
}