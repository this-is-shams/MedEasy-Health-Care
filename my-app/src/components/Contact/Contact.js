import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = (props) => {

  return (
    <div className="Contact_US_DIV mt-5">
      <h2 className="mb-3">CONTACT US</h2>
      <form>
        <div className="mb-3">
          <label className="form-label s" htmlFor="name">
            Your Name
          </label>
          <input className="form-control s" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label s" htmlFor="email">
            Your Email
          </label>
          <input className="form-control s" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Your Message
          </label>
          <textarea className="form-control s" id="message" required />
        </div>
        <button className="btnn btn-info" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
