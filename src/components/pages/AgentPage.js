import React, { useState, useEffect } from "react";
import Dashboard from "../component/Dashboard";
import PorfileDashboard from "../component/PorfileDashboard";
import ConversationDashboard from "../component/ConversationDashboard";

const AgentPage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    user !== null && (
      <div className="h-screen w-screen flex flex-row bg-white">
        <Dashboard picture={user.picture.data.url} />
        <div className="flex flex-grow">
          <ConversationDashboard />
        </div>
        <div className="border">
          <PorfileDashboard User={user} />
        </div>
      </div>
    )
  );
};

export default AgentPage;
