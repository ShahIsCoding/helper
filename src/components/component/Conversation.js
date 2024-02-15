import React from "react";

const Conversation = ({ isActive = false }) => {
  return (
    <div
      className={`flex flex-col p-2 w-full ${
        isActive ? "bg-slate-100" : "bg-white"
      } border`}
    >
      <div className="flex flex-row items-center w-full px-3 mb-2">
        <input type="checkbox" checked={false} />
        <div className="flex flex-col mx-2">
          <h1 className="text-sm font-semibold">Amit RG</h1>
          <h6>Facebook DM</h6>
        </div>
        <div className="text-right flex-grow">
          <h1 className="text-sm font-semibold">10m</h1>
        </div>
      </div>
      <div className="flex flex-col px-3">
        <h1 className="text-sm font-semibold">Awesome Products</h1>
        <h6 className="text-ellipsis overflow-hidden ... text-nowrap">
          Hey There is problabysefsefsefsefsefsefse
        </h6>
      </div>
    </div>
  );
};

export default Conversation;
