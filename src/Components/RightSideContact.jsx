import React, { useEffect, useState } from "react";

const RightSideContact = () => {
  const [form, setform] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields!");
      return;
    }
    setSubmitted(true);
    setform({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [submitted]);
  return (
    <div className="card p-6 bg-base-100 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Send a message</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text "
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="email "
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          className="w-full textarea textarea-bordered"
          rows="4"
        />
        {submitted ? (
          <div className="alert alert-success shadow-lg flex justify-center">
            Thanks! Your message has been sent.
          </div>
        ) : (
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default RightSideContact;
