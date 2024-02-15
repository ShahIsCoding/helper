import React from "react";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { IoPersonCircleSharp } from "react-icons/io5";

const PorfileDashboard = ({ User }) => {
  return (
    <div className="w-72 h-full bg-slate-100">
      <div className="flex flex-col py-5 bg-white">
        <div className=" h-20 flex justify-center items-center">
          <img
            src={User.picture.data.url}
            className=" w-16 h-16 rounded-full"
            alt="profile"
          />
        </div>
        <p className="text-center mb-2">
          <h1>
            {User.first_name} {User.last_name}
          </h1>
          <div className="text-gray text-xs">Offline</div>
        </p>
        <div className="flex flex-row justify-center ">
          <div className="border py-2 px-4 mr-2 rounded flex flex-row items-center shadow-md cursor-pointer">
            <LiaPhoneAltSolid className="text-xl mr-1" /> <h6>Call</h6>
          </div>
          <div className="border  py-2 px-4 rounded flex flex-row items-center shadow-md cursor-pointer">
            <IoPersonCircleSharp className="text-xl mr-1" /> <h6>Profile</h6>
          </div>
        </div>
      </div>
      <div className="  p-2">
        <div className="bg-white p-4 rounded">
          <h2 className="font-bold">Customer Details</h2>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div>Email</div>
              <div className="font-bold text-sm flex-grow text-right">
                {User.email}
              </div>
            </div>
            <div className="flex flex-row">
              <div>First Name</div>
              <div className="font-bold text-sm flex-grow text-right">
                {User.first_name}
              </div>
            </div>
            <div className="flex flex-row">
              <div>Last Name</div>
              <div className="font-bold text-sm flex-grow text-right">
                {User.last_name}
              </div>
            </div>
          </div>
          <h2 className="text-blue-700">View more details</h2>
        </div>
      </div>
    </div>
  );
};

export default PorfileDashboard;
