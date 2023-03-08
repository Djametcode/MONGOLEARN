import { useState } from "react";
import Login from "./login";
import Register from "./regist";
import UserList from "./userlist";

const Wrapper = () => {
  const [regist, toggleRegist] = useState(false);
  const [login, toggleLogin] = useState(true);

  const handleRegist = () => {
    toggleLogin(false);
    toggleRegist(true);
    setWidth2("100%");
    setWidth1("");
    setBg2("green");
    setBg1("lightgrey");
    setTxt2("white");
    setTxt1("black");
  };
  const HandleLogin = () => {
    toggleRegist(false);
    toggleLogin(true);
    setWidth2("");
    setWidth1("100%");
    setBg2("lightGrey");
    setBg1("green");
    setTxt2("black");
    setTxt1("white");
  };
  const [width1, setWidth1] = useState("100%");
  const [width2, setWidth2] = useState("");

  const [bg1, setBg1] = useState("green");
  const [bg2, setBg2] = useState("lightGrey");

  const [txt1, setTxt1] = useState("white");
  const [txt2, setTxt2] = useState("");
  return (
    <div className=" bg-slate-400 font-quick">
      <h1 className=" bg-blue-900 text-white p-6 text-3xl text-center">
        Secret Message
      </h1>
      <p className=" text-center text-white p-3 bg-slate-600">
        <q>Silahkan Login atau register dulu</q>
      </p>
      <div className=" flex justify-around p-2 gap-2">
        <button
          className=" rounded-lg p-2"
          onClick={HandleLogin}
          style={{ width: width1, backgroundColor: bg1, color: txt1 }}
        >
          Login
        </button>
        <button
          className=" rounded-lg "
          onClick={handleRegist}
          style={{ width: width2, backgroundColor: bg2, color: txt2 }}
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
      <div className=" fixed bottom-0 w-full flex text-white">
        <div className=" bg-black w-full p-5 flex flex-col justify-center text-center">
          <p>Made By Djamet Coder</p>
          <p>Copyright &copy; 2023</p>
        </div>
        <div className=" bg-black w-full flex flex-col justify-center text-center">
          <p className="">Contact Me</p>
          <p className="">Support Me</p>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
