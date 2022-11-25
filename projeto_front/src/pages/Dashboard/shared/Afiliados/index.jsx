import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { RiPencilLine } from 'react-icons/ri'
import { Header } from '../../../../components/Header';
import { Sidebar } from '../../../../components/Sidebar';
import styles from './styles.module.scss';

export function ShowAfiliados() {

  const [getAfiliados, setGetAfiliados] = useState([]);

  const GetAfiliados = 'http://localhost:8000/employee';
  useEffect(() => {
    axios.get(GetAfiliados).then((response) => setGetAfiliados(response.data))
  }, []);

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
              {getAfiliados?.map((element) => {
                return (
                  <tbody className={styles.tbody}>
                    <tr key={element.id}>
                      <td>
                        <p>{element.username}</p>
                      </td>
                      <td>
                        <p>{element.email}</p>
                      </td>
                      <td>
                        <p>{element.dob.slice(0,10)}</p>
                      </td>
                      <td>
                        <p>{element.gender}</p>
                      </td>

                      <td>
                        <button> <RiPencilLine size='16px' />Editar</button>
                      </td>
                    </tr>
                  </tbody>
                )
              })}

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}