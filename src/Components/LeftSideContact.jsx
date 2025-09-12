import React from "react";
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
import { Link } from "react-router-dom";

const LeftSideContact = () => {
  return (
    <div className="card bg-base-100 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="opacity-80 mb-6">
          {" "}
          Have questions or feedback? Drop a message or reach us via the details
          below.
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
            <FontAwesomeIcon icon={faPhone} className="text-primary h-5 w-5" />
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
  );
};

export default LeftSideContact;
