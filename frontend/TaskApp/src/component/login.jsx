import axios from "axios";
import { useRef, useState } from "react";
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
  const handleSubmit = async () => {
    try {
      const datas = await axios.post(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/auth/login",
        data
      );
      const item = datas.data;
      const {
        user: { name },
        token,
      } = item;
      await localStorage.removeItem("token");
      await localStorage.setItem("token", token);
      await localStorage.setItem("name", name);
      await navigate("/dashboard");
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
        className=" bg-slate-400 flex flex-col p-3 gap-1 font-quick justify-center"
        action="#"
      >
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
        <div className=" text-center bg-slate-200/20 text-red-600">
          <p>{warning}</p>
        </div>
        <div className=" flex justify-center">
          <Link
            className=" p-2 focus:outline-none bg-white/20"
            onClick={handleSubmit}
            to="/landing"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
