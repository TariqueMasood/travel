"use client";

import { useContext } from "react";
import styles from "./contact-form.module.css";
import { FormContext } from "@/context/form-context";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const context = useContext(FormContext);

  const router = useRouter();

  if (!context) {
    throw new Error("FormComponent must be used within a FormProvider");
  }

  const { formData, updateFormData, resetFormData, saveToLocalStorage } =
    context;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          email: "akramaltaf786@gmail.com",
          name: formData.name,
          message: formData.message,
          visaType: formData.visaType,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error: any) {
      console.log("Error", error);
    }

    saveToLocalStorage();
    resetFormData();
    router.push("/");
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name*"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email*"
          value={formData.email}
          onChange={handleChange}
        />
        <select
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
        >
          <option value="">Select the visa type</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Travel Visa">Travel Visa</option>
          <option value="Working Visa">Working Visa</option>
          <option value="Business Visa">Business Visa</option>
          <option value="Visitor Visa">Visitor Visa</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message..."
        ></textarea>

        <button type="submit">Send Your Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
