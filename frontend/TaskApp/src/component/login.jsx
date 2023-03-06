import axios from "axios";
import { useRef, useState } from "react";

const Login = () => {
  const usernameref = useRef();
  const emailref = useRef();
  const passref = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = () => {
    setUsername(usernameref.current.value);
    setPassword(passref.current.value);
    setEmail(emailref.current.value);
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const data = {
    username: username,
    email: email,
    password: password,
  };
  const handleSubmit = async () => {
    try {
      await axios.post();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex flex-col justify-center">
      <form
        className=" bg-slate-400 flex flex-col p-3 gap-1 font-quick justify-center h-96"
        action="/"
      >
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="Password"
          onChange={handleChange}
        />
        <div className=" flex justify-center">
          <input
            className=" p-2 focus:outline-none bg-white/20"
            type="submit"
            value="Registrasi"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
