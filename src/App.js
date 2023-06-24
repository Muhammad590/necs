import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./Components/Navbars/Navbars";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Office from "./Components/Contact/Office";
import Donate from "./Components/Donate/Donate";
import Careers from "./Components/Careers/Careers";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Program from "./Components/Program/Program";


function App() {
  return (
    <>

    {/* <BrowserRouter>
    <Navbars />
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/program" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/about" element={<About/>} />

        </Routes>
       
      </BrowserRouter> */}
      <Office />
    </>
  );
}

export default App;
