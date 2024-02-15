import React, { useState } from "react";
import InputLabel from "../component/InputLabel";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    let payload = {
      name,
      email,
      password,
      rememberMe,
    };
    navigate("/pageAccess");
  };
  return (
    <div className="App h-screen w-screen bg-blue-800">
      <div className="w-full h-full flex items-center justify-center">
        <div className="lg:w-2/6 w-3/5 px-8 py-4 bg-slate-50 rounded-xl">
          <h1 className="text-center font-bold my-5 text-xl ">
            {isLogin ? "Login to your account" : "Create Account"}
          </h1>
          <form onSubmit={handleSubmit}>
            <InputLabel label="Name" value={name} setValue={setName} />
            {!isLogin && (
              <InputLabel
                label="Email"
                value={email}
                setValue={setEmail}
                type="email"
              />
            )}
            <InputLabel
              label="Password"
              value={password}
              setValue={setPassword}
              type="password"
            />
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Remember Me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white w-full bg-blue-800 text-center p-3 my-3 rounded cursor-pointer"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>
          <p className="text-center" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? (
              <>
                New to App?{" "}
                <span className="text-blue-800 cursor-pointer">Sign Up</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="text-blue-800 cursor-pointer">Login</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
