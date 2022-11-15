import React from 'react';
import { Home } from '../../components/DashboardComponents/home1/home';
import { Home2 } from '../../components/DashboardComponents/home2/home2';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import styles from './styles.module.scss';

export function Dashboard() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <Sidebar />
        <div className={styles.components}>
          <Home />
          <Home2 />
        </div>
        </div>
      </div>
  )
}