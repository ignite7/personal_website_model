// React
import React, { useRef, useState } from "react";

// Email
import emailjs from "emailjs-com";

// Components
import Form from "./Form";

function FormContainer() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusEmail, setStatusEmail] = useState("");
  const form = useRef(null);

  const validateData = (data) => {
    // Validate email, not empty fields and recaptcha
    const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i;
    if (
      re.test(data.email.toLowerCase()) &&
      data.name &&
      data.subject &&
      data.message
    ) {
      setError(false);
      return false; // Not errors, SEND email
    }
    setError(true);
    return true; // Error, NOT send email
  };

  const sendEmail = (data) => {
    emailjs
      .send(
        process.env.REACT_APP_PROVIDER,
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            form.current.reset();
            setStatusEmail("Email send successfully!");
            setIsLoading(false);
          }
        },
        () => {
          setStatusEmail(
            "Something went wrong. Contact Email: {EMAIL}"
          );
          setIsLoading(false);
        }
      );
  };

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    if (!validateData(data)) {
      setIsLoading(true);
      sendEmail(data);
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      form={form}
      error={error}
      isLoading={isLoading}
      statusEmail={statusEmail}
    />
  );
}

export default FormContainer;
