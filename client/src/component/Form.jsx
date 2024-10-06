import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="row">
        <div className="md:w-[50%] mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
          />
        </div>
        <div className="md:w-[50%] mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
        </div>
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={formData.comments}
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
          rows="3"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
