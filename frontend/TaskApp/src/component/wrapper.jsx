import { useState } from "react";
import Login from "./login";
import Register from "./regist";

const Wrapper = () => {
  const [regist, toggleRegist] = useState(false);
  const [login, toggleLogin] = useState(true);

  const handleRegist = () => {
    toggleLogin(false);
    toggleRegist(true);
  };
  const HandleLogin = () => {
    toggleRegist(false);
    toggleLogin(true);
  };
  return (
    <div className=" bg-slate-400 font-quick">
      <h1 className=" bg-slate-300 p-5 text-2xl text-center">Secret Message</h1>
      <p className=" text-center p-1 bg-slate-200">
        <q>Silahkan Login atau register dulu</q>
      </p>
      <div className=" flex justify-around p-2 gap-2">
        <button
          className=" bg-slate-100 w-full underline"
          onClick={HandleLogin}
        >
          Login
        </button>
        <button
          className=" bg-slate-100 w-full underline"
          onClick={handleRegist}
        >
          Register
        </button>
      </div>
      <div>
        {login && <Login />}
        {regist && <Register />}
      </div>
    </div>
  );
};

export default Wrapper;
