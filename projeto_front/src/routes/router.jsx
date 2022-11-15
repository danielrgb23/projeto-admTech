import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Signin } from '../pages/Signin';

export const AppRoutes = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/signin' element={<Signin />} />
   </Routes>
  </BrowserRouter>
 )
}