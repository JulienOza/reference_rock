import React, { useState } from "react";
import "./ContactForm.css";
import Navbar from "../../components/Navbar/Navbar";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/formsubmits`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormData({
        name: "",
        mail: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Navbar />
      <main className="contactForm_container">
        <form className="contactForm" onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="mail">Email:</label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="phone">Téléphone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="subject">Objet:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </p>
          <button type="submit">Envoyer</button>
        </form>
      </main>
    </>
  );
}

export default ContactForm;
