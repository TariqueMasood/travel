"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./contact-form.module.css";
import { useRouter } from "next/navigation";
import { createContext } from "vm";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const router = useRouter();
  const formContext = createContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Form details ${inputs.name} and ${inputs.email}`);
    setInputs({
      name: "",
      email: "",
    });
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name*"
          value={inputs.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email*"
          value={inputs.email}
          onChange={handleChange}
        />
        <select>
          <option value="Your Question About..">Your Question About..</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Travel Visa">Travel Visa</option>
          <option value="Working Visa">Working Visa</option>
          <option value="Business Visa">Business Visa</option>
          <option value="Visitor Visa">Visitor Visa</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="comment"
          form="usrform"
          placeholder="Your Message..."
        ></textarea>

        <button type="submit" value=" Send Your Message">
          Send Your Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
