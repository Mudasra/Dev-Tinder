
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import LeftSideContact from "./LeftSideContact";
import RightSideContact from "./RightSideContact";

const Contact = () => {


  return (
    
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
       <LeftSideContact/>
       <RightSideContact/>       
      </div>
    </div>
  );
};

export default Contact;






