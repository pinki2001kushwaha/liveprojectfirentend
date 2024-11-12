import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'; // Dashboard component
import Prefrom from './components/Prefrom'; // Prefrom component
import Ecommerce from './dashboard/Ecommerce'; // Ecommerce page
import Tables from './dashboard/Tables'; // Tables page
import Login from './dashboard/Login'; 
import Dash from "./components/Dash"
import Users from './dashboard/Users';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="ecommerce" element={<Ecommerce />} />
            <Route path="tables" element={<Tables />} />
            <Route path="Prefrom" element={<Prefrom />} />
            <Route path="Dash" element={<Dash />} />
            <Route path='Users' element={<Users/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
