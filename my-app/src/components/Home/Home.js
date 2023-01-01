import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from '../Services/Services'
import Bannar from '../Bannar/Bannar'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Extra from '../extra/extras'


function Home() {
  return (
    <div>
      <Bannar></Bannar>

      <div className="ser"><h1>OUR SERVICES</h1></div>

      <Services></Services>
      <Contact></Contact>
      <div className="ser"><h1>See what others tell about our service</h1></div>
      <Extra></Extra>
      <Footer></Footer>

    </div>
  );
}

export default Home;
