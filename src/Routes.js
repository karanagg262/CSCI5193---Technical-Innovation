import React from 'react';
import { Route, Routes as Rt } from 'react-router-dom';
import RequestPickup from './components/RequestPickup';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
const Routes = () => {
    return (
      <Rt>
        <Route path="/requestpickup" element={<RequestPickup />} />
        <Route path="/contactus" element={<ContactUs />}/>  
        <Route path='/login' element={<Login />}/>
        </Rt>
  );
  }
  export default Routes;