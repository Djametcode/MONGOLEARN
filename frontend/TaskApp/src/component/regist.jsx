import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const usernameref = useRef();
  const emailref = useRef();
  const passref = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [msg, togglemsg] = useState(false);
  const [txt, settxt] = useState(msg);

  const handleChange = () => {
    setUsername(usernameref.current.value);
    setPassword(passref.current.value);
    setEmail(emailref.current.value);
  };

  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };
  const data = {
    username: username,
    email: email,
    password: password,
  };
  const handleSubmit = async () => {
    try {
      const item = await axios.post(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/auth/register",
        data
      );
      const datas = item.data;
      const { user, token, msg } = datas;
      settxt(msg);
      await togglemsg(true);
      localStorage.removeItem("token");
    } catch (error) {
      console.log(error);
      const txt = error.response.data;
      const { msg } = txt;
      settxt(msg);
    }
  };
  return (
    <div className=" flex flex-col justify-center">
      <form
        className=" bg-gradient flex flex-col p-3 gap-1 font-quick justify-center"
        action="#"
      >
        <input
          className=" rounded-lg p-2 focus:outline-none bg-wave focus:text-white text-white"
          type="text"
          placeholder="Username"
          ref={usernameref}
          onChange={handleChange}
        />
        <input
          className=" rounded-lg p-2 focus:outline-none bg-wave focus:text-white text-white"
          type="text"
          placeholder="Email"
          ref={emailref}
          onChange={handleChange}
        />
        <input
          className=" rounded-lg p-2 focus:outline-none bg-wave focus:text-white text-white"
          type="text"
          placeholder="Password"
          ref={passref}
          onChange={handleChange}
        />
        <div>
          {msg && (
            <p className=" bg-slate-200/40 text-center text-green-800">{txt}</p>
          )}
        </div>
        <div className=" flex justify-center">
          <button
            className=" rounded-lg p-2 focus:outline-none bg-white/20"
            onClick={handleSubmit}
          >
            Buat Akun
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
