import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Bannar from "./components/Bannar/Bannar";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import AddService from "./components/AddService/AddService";
import Extra from "./components/extra/extra";
import Home from "./components/Home/Home";
import UpdateService from './components/UpdateService/UpdateService'
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddReview from "./components/AddReview/AddReview";


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
        <Route path="/extra" element={<Extra />} />
        <Route path="/updateService/:serviceId" element={<UpdateService />} />
        <Route path="/AddReview" element={<AddReview />} />
      </Routes>
      
    </div>
  );
}

export default App;
