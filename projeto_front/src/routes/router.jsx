import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { ShowAfiliados } from '../pages/Dashboard/shared';
import { Signin } from '../pages/Signin';

export const AppRoutes = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path='/Home' element={<Dashboard />} />
    <Route path='/afiliados' element={<ShowAfiliados />} />
    
    <Route path='/signin' element={<Signin />} />
   </Routes>
  </BrowserRouter>
 )
}