import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import BackToTopButton from "./BackToTopButton";
import "./stylle.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3033/api/send",
        formData
      ); // Adjust URL if needed
      alert(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-wrapper">
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text phone">
                <a href="tel:7396425771" title="Give me a call">
                  +91-7693843899
                </a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text gmail">
                <a
                  href="mailto:tarunnagle04@gmail.com"
                  title="Send me an email"
                >
                  tarunnagle04@gmail.com
                </a>
              </span>
            </li>
          </ul>
          <hr />
          <hr />
        </div>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;
