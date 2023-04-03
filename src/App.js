import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import ContactUs  from "./components/ContactUs";
import RequestPickup  from "./components/RequestPickup";
import { Maps } from "./components/Maps";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/requestpickup" element={<RequestPickup />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/maps" element={<Maps />}></Route>
      </Routes>
    </div>
  );
}

export default App;
