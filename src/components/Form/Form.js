// React
import React from "react";

// Components
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

// Css
import "./Form.css";

function Form({ handleSubmit, form, error, isLoading, statusEmail }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      ref={form}
      className="form"
    >
      <div className="form__group">
        <label htmlFor="name">
          <input
            type="text"
            className="form__name"
            placeholder="Name"
            name="name"
            autoComplete="name"
            required
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            className="form__email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            required
          />
        </label>
      </div>
      <input
        type="text"
        className="form__subject"
        placeholder="Subject"
        name="subject"
        required
      />
      <textarea
        className="form__message"
        rows="4"
        placeholder="Message"
        name="message"
        required
      />
      <Button text="Send" handleSubmit={handleSubmit} />
      {error && (
        <h3 className="form__error">
          Please complete all fields and insert a valid email.
        </h3>
      )}
      {isLoading && <Loading />}
      {statusEmail && <h3 className="form__status">{statusEmail}</h3>}
    </form>
  );
}

export default Form;
