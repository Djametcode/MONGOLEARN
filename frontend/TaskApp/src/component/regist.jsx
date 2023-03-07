import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const usernameref = useRef();
  const emailref = useRef();
  const passref = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [msg, togglemsg] = useState(false);
  const [txt, settxt] = useState("");

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
  console.log(data);
  const handleSubmit = async () => {
    try {
      const item = await axios.post(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/auth/register",
        data
      );
      const datas = item.data;
      const { user, token, msg } = datas;

      settxt(msg);
      togglemsg(true);
      localStorage.setItem("token", token);

      setUsername("");
      setEmail("");
      setPassword("");

      event.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex flex-col justify-center">
      <form
        className=" bg-slate-400 flex flex-col p-3 gap-1 font-quick justify-center"
        action="#"
      >
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="Username"
          ref={usernameref}
          onChange={handleChange}
        />
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="Email"
          ref={emailref}
          onChange={handleChange}
        />
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="Password"
          ref={passref}
          onChange={handleChange}
        />
        <div className=" flex justify-center">
          {msg && <p>{txt} cok</p>}
          <Link
            className=" p-2 focus:outline-none bg-white/20"
            onClick={handleSubmit}
            to="/login"
          >
            Buat Akun
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
