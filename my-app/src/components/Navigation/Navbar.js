import "./NavbarStyle.css";
import { ReactComponent as Logo } from './Care.svg';


function Navbar() {
  return (
    <nav href="index.html">
      <a>
      <div className="container">
          <img  src={Logo} />
      </div>
      </a>
      <div>
        <ul id="navbar">
          <li>
            <a href="index.html">Home</a>
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
