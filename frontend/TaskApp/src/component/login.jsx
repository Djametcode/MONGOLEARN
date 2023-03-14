import axios from "axios";
import { createContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailref = useRef();
  const passref = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = () => {
    setEmail(emailref.current.value);
    setPassword(passref.current.value);
  };

  const data = {
    email: email,
    password: password,
  };
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");
  const [ids, setId] = useState("");
  const handleSubmit = async () => {
    try {
      const datas = await axios.post(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/auth/login",
        data
      );
      const item = datas.data;
      const {
        user: { name, email_user, id_user },
        token,
      } = item;
      await localStorage.removeItem("token");
      await localStorage.setItem("token", token);
      await localStorage.setItem("name", name);
      await localStorage.setItem("_id", id_user);
      await localStorage.setItem("email", email_user);
      await navigate("/beranda");
    } catch (error) {
      console.log(error);
      const data = error.response.data;
      const { msg } = data;
      setWarning(msg);
    }
  };
  return (
    <div className=" flex flex-col justify-center">
      <form
        className=" bg-wave m-3 flex flex-col p-3 gap-1 font-quick justify-center h-52"
        action="#"
      >
        <input
          className=" text-white/70 rounded-lg p-2 focus:outline-none bg-slate-400/30 focus:text-white"
          type="text"
          placeholder="Email"
          ref={emailref}
          onChange={handleChange}
        />
        <input
          className=" text-white/70 rounded-lg p-2 focus:outline-none bg-slate-400/30 focus:text-white"
          type="text"
          placeholder="Password"
          ref={passref}
          onChange={handleChange}
        />
        <div className=" text-center text-red-600">
          <p>{warning}</p>
        </div>
        <div className=" flex justify-center">
          <div className=" m-1">
            <Link
              className=" rounded-lg p-2 focus:outline-none bg-white/20 text-white/40"
              onClick={handleSubmit}
              to="/landing"
            >
              Login
            </Link>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className=" text-center text-sm translate-y-3">
            <p>Belum punya akun? </p>
            <Link to="/regist" className=" underline">
              Registrasi
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
