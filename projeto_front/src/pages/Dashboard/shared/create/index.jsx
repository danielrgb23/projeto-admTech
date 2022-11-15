import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from '../../../../components/Header';
import { Sidebar } from '../../../../components/Sidebar';
import styles from './styles.module.scss';

export function CreateAfiliado() {

 const Now = new Date();
 const Hoje = Now.toISOString().slice(0, 10);

 const [use, setUser] = useState('');
 const [gender, setGender] = useState('');
 const [data, setData] = useState(Hoje);
 const [adress, setAdress] = useState('');
 const [email, setEmail] = useState('');

 const [teste, setTeste] = useState([]);

 const Request = {
  "username": use,
  "gender": gender,
  "dob": data,
  "address": adress,
  "password": "string",
  "email": email,
 }

 console.log(teste)

 const Conselho = 'http://localhost:8000/employee';
 useEffect(() => {
   axios.get(Conselho).then((response) => setTeste(response))
 }, []);
//  const CadastroUser = () => {
//   axios.post('http://localhost:8000/employee', Request)
//     .then((res) => {
//       console.log('batata', res)
    
//     }).catch((err) => {
//       console.log(err)
//     })
// }

 return (
  <div className={styles.container}>
   <Header />

   <div className={styles.content}>
    <Sidebar />
    <div className={styles.components}>
     <div className={styles.background}>
      <h1>Cadastro Usuario</h1>
      <div className={styles.form}>
       <div className={styles.columna1}>
        <label>
         E-mail
         <input
          onChange={((e) => setEmail(e.target.value))}
          placeholder='E-mail' />
        </label>
        <label>
         Nome
         <input
          onChange={((e) => setUser(e.target.value))}
          placeholder='Nome' />
        </label>
       </div>
       <div className={styles.columna2}>
        <label>
         Genero
         <input
          onChange={((e) => setGender(e.target.value))}
          placeholder='Genero' />
        </label>
        <label>
         Data
         <input
          placeholder='Data'
          value={Hoje}
          disabled={true} />
        </label>
       </div>
       <div className={styles.columna3}>
        <label>
         Endereço
         <input
          onChange={((e) => setAdress(e.target.value))}
          placeholder='Endereço' />
        </label>

        {/* <button onClick={CadastroUser}>Confirmar</button> */}
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}