import {
  faGit,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
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
      }, 3000);
    }

    return () => clearTimeout(timer);
  } , [submitted]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/*left side - contact info */}
        <div className="card bg-base-100 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="opacity-80 mb-6">
              {" "}
              Have questions or feedback? Drop a message or reach me via the
              details below.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary h-5 w-5"
                />
                <span>youremail@example.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-primary h-5 w-5"
                />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-primary h-5 w-5"
                />
                <span>New York, USA</span>
              </li>
            </ul>
          </div>
          {/* social links */}
          <div className="flex gap-4 mt-6">
            <Link
              to={"https://github.com/"}
              target="_blank"
              className="btn btn-outline btn-circle"
            >
              <FontAwesomeIcon icon={faGit} />
            </Link>
            <Link
              to={"https://linkedin.com/"}
              target="_blank"
              className="btn btn-outline btn-circle"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link
              to={"https://twitter.com/"}
              target="_blank"
              className="btn btn-outline btn-circle"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
        </div>

        {/* right side - contact form*/}
        <div className="card p-6 bg-base-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Send a message</h2>
          {submitted ? (
            <div className="alert alert-success shadow-lg flex justify-center">
              Thanks! Your message has been sent.
            </div>
          ) : (
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
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
