import React from "react";
import { FaInbox } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
const Dashboard = ({ picture }) => {
  console.log(picture);
  return (
    <div className="w-20 h-full bg-blue-800 flex flex-col justify-between">
      <div>
        <div className="h-20  flex justify-center items-center">
          <img src="https://global-uploads.webflow.com/628202eb7980b612a999fc44/62ab4580a7221d718071030f_richpanel-logo.png" />
        </div>
        <div className="h-20 bg-white flex justify-center items-center">
          <FaInbox className="text-3xl text-blue-800" />
        </div>
        <div className="h-20  flex justify-center items-center">
          <MdPeopleAlt className="text-3xl text-white" />
        </div>
      </div>

      <div className=" h-20 flex justify-center items-center">
        <img src={picture} className=" w-16 h-16 rounded-full" alt="profile" />
      </div>
    </div>
  );
};

export default Dashboard;
