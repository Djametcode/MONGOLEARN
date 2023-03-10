import { useState } from "react";
import Footer from "./footer";
import Help from "./help";
import Login from "./login";
import Register from "./regist";
import UserList from "./userlist";

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
    <div className=" bg-wave font-quick sm:hidden">
      <h1 className=" sticky z-10 top-0 bg-wave bg-cover text-white p-6 text-3xl text-center">
        Posting Aja Dulu
      </h1>
      <div className=" flex justify-around p-2">
        <button
          className=" z-0 p-2 bg-slate-400/30 text-white/40 w-full m-1 rounded-lg"
          onClick={HandleLogin}
        >
          Login
        </button>
        <button
          className=" p-2 bg-slate-400/30 text-white/40 w-full m-1 rounded-lg"
          onClick={handleRegist}
        >
          Register
        </button>
      </div>
      <div>
        {login && <Login />}
        {regist && <Register />}
      </div>
      <div className=" bg-slate-400">
        <UserList />
      </div>
      <div className=" p-2">
        <Help />
      </div>

      <div className=" fixed bottom-0 w-full flex text-white text-sm">
        <Footer />
        {/* <div className=" bg-wave w-full p-2 flex flex-col justify-center text-center">
          <p>Made By Djamet Coder</p>
          <p>Copyright &copy; 2023</p>
        </div>
        <div>
          <hr className=" text-white bg-white" />
        </div> */}
        {/* <div className=" bg-wave w-full flex flex-col justify-center text-center">
          <p className=" underline">Contact Me</p>

          <p className=" underline">Support Me</p>
        </div> */}
      </div>
    </div>
  );
};

export default Wrapper;
