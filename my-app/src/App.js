import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bannar from "./components/Bannar";
import Contact from "./components/Contact";
import Services from "./components/Services";
import "./style.css";

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
      <Route path="/bannar" element={<Bannar/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      </Routes>
    </div>
  )
}

export default App
