import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { ShowAfiliados } from '../pages/Dashboard/shared/Afiliados';
import { CreateAfiliado } from '../pages/Dashboard/shared/create';
import { Signin } from '../pages/Signin';

export const AppRoutes = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path='/Home' element={<Dashboard />} />
    <Route path='/afiliados' element={<ShowAfiliados />} />
    <Route path='/afiliados/create' element={<CreateAfiliado />} />
    
    <Route path='/' element={<Signin />} />
   </Routes>
  </BrowserRouter>
 )
}