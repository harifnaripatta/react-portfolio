import React from "react";
import "./ContactCardInfo.css";

const ContactCardInfo = () => {
  return (
    <div className="contact-details-card">
      <dir className="contact-details-card-top">
        <h4>Contact Me</h4>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </dir>
      <dir className="contact-details-card-bottom">
        <h4>Further Info</h4>
        <div className="contct-link-container">
          <div>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:harifnarippatta@gmail.com">
              harifnarippatta@gmail.com
            </a>
          </div>
          <div>
            <i class="fa-solid fa-phone"></i>
            <a href="#">+966 50 496 2816</a>
          </div>
          <div>
            <i class="fa-brands fa-github"></i>
            <a href="https://github.com/harifnaripatta">
              https://github.com/harifnaripatta
            </a>
          </div>
          <div>
            <i class="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/harifnarippatta/">
              https://www.linkedin.com/in/harifnarippatta/
            </a>
          </div>
        </div>
      </dir>
    </div>
  );
};

export default ContactCardInfo;
