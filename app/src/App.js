// App.jsx
import React from "react";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Clients from "./pages/Clients";
import Ushealthcare from "./pages/Ushealthcare";
import Career from "./pages/Career";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      
      <Route exact path="/" element={<Home/>} />
      <Route path="/service" element={<Services/>} />
      <Route path="/Aboutus" element={<Aboutus/>} />
      <Route path="/Clients" element={<Clients/>} />
      <Route path="/Contact" element={<ContactUs/>} />
      <Route path="/Ushealthcare" element={<Ushealthcare/>} />
      <Route path="/career" element={<Career/>} />
        
      </Routes>

    </BrowserRouter>
  );
};

export default App;
