
import './App.css';
import Routes from './Routes.js';
import { Route, Routes as Rt } from 'react-router-dom';
import RequestPickup from './components/RequestPickup';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <div className="App">
       <Rt>
        <Route path="/requestpickup" element={<RequestPickup />} />
        <Route path="/contactus" element={<ContactUs />}/>  
  
        </Rt>
    </div>
  );
}

export default App;
