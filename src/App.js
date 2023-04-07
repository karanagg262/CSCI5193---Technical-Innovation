import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import ContactUs  from "./components/ContactUs";
import RequestPickup  from "./components/RequestPickup";
import Homepage from "./components/Homepage";
import { Maps } from "./components/Maps";
import Resources from "./components/Resources";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/requestpickup" element={<RequestPickup />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/maps" element={<Maps />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
      </Routes>
    </div>
  );
}

export default App;
