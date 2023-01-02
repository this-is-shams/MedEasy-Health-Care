import "./NavbarStyle.css";
import Logo from './Care.png';


function Navbar() {
  return (
    <nav >
      <a>
      <div className="container">
          <img  src={Logo} />
      </div>
      </a>
      <div>
        <ul id="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Service</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/bannar">Banner</a>
          </li>
          <li>
            <a href="/AddService">Add Service</a>
          </li>
          <li>
            <a href="/AddReview">Add Review</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
