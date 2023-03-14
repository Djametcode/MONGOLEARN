import { useState } from "react";
import Footer from "./footer";
import Help from "./help";
import Login from "./login";
import Register from "./regist";
import UserList from "./userlist";

const Wrapper = () => {
  // const [regist, toggleRegist] = useState(false);
  // const [login, toggleLogin] = useState(true);

  // const handleRegist = () => {
  //   toggleLogin(false);
  //   toggleRegist(true);
  // };
  // const HandleLogin = () => {
  //   toggleRegist(false);
  //   toggleLogin(true);
  // };
  return (
    <div className=" bg-wave font-quick sm:hidden">
      <h1 className=" font-comic sticky z-10 top-0 bg-wave bg-cover text-white p-6 text-3xl text-center">
        Posting Aja Dulu
      </h1>
      <div className=" flex justify-around p-2">
        {/* <button
          className=" z-0 p-2 bg-slate-400/30 text-white/40 w-full m-1 rounded-lg"
          onClick={HandleLogin}
        >
          Login
        </button> */}
        {/* <div>
          <h2
            className=" p-2 bg-slate-400/30 text-white/40 w-full m-1 rounded-lg text-center"
            // onClick={handleRegist}
          >
            Login
          </h2>
        </div> */}
      </div>
      {/* <div>
        {login && <Login />}
        {regist && <Register />}
      </div> */}
      <Login />
      <div className=" bg-slate-400">
        <UserList />
      </div>
      <div className=" p-2">
        <Help />
      </div>

      <div className=" fixed bottom-0 w-full flex text-white text-sm">
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
