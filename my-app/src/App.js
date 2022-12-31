import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Bannar from "./components/Bannar/Bannar";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import AddService from "./components/AddService/AddService";
import Home from "./components/Home/Home";
import UpdateService from './components/UpdateService/UpdateService'
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/bannar" element={<Bannar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/AddService" element={<AddService />} />
        <Route path="/updateService/:serviceId" element={<UpdateService />} />
      </Routes>
    </div>
  );
}

export default App;
