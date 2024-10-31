import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form>
        <div className="name-container">
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="email-container">
          <label>Email Address</label>
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="selection-container">
          <label>Service You want</label>
          <select name="" id="" className="form-">
            <option
              style={{ backgroundColor: "#20245B" }}
              className="option"
              value=""
            >
              Service you want
            </option>
            <option
              style={{ backgroundColor: "#20245B" }}
              className="option"
              value="web design"
            >
              web design
            </option>
            <option
              style={{ backgroundColor: "#20245B" }}
              className="option"
              value="web development"
            >
              web development
            </option>
          </select>
          <i class="fa-solid fa-caret-down"></i>
        </div>
        <div className="textarea-container">
          <label>Additional Message</label>
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="write here ......"
          ></textarea>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
