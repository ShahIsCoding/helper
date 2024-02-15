import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSocialFacebook } from "reactjs-social-login";

const HandlePagesAccess = ({ isIntegrated = false }) => {
  const navigate = useNavigate();
  const onLogoutSuccess = useCallback((e) => {
    alert("logout success");
    console.log(e);
  }, []);

  return (
    <div className="App h-screen w-screen bg-blue-800">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="lg:w-2/6 w-3/5 px-8 py-4 bg-slate-50 rounded-xl text-center">
            <p className="text-xl">Facebook Page Integration</p>
            {isIntegrated && (
              <p className="text-xl">
                Integrated Page :{" "}
                <span className="font-bold"> Amazon Buiness</span>
              </p>
            )}
            {!isIntegrated ? (
              <div className=" w-4/5 mx-auto bg-blue-800 text-center p-3 my-3 rounded cursor-pointer">
                <LoginSocialFacebook
                  appId={process.env.REACT_APP_FB_APP_ID}
                  onResolve={(resp) => {
                    localStorage.setItem("user", JSON.stringify(resp.data));
                    navigate("/agentpage");
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  Connect Page
                </LoginSocialFacebook>
              </div>
            ) : (
              <>
                <LoginSocialFacebook onLogoutSuccess={onLogoutSuccess}>
                  <div className=" w-4/5 mx-auto bg-red-800 text-center p-3 my-3 rounded cursor-pointer">
                    <button className="text-white">Delete Integration</button>
                  </div>
                </LoginSocialFacebook>

                <div className=" w-4/5 mx-auto bg-blue-800 text-center p-3 my-3 rounded cursor-pointer">
                  <button className="text-white">Reply to Messages</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandlePagesAccess;
