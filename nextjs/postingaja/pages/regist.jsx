import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Regist() {
  const [username, setUsername] = useState();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const data = {
    username: username,
    email: email,
    password: password,
  };
  console.log(data);

  const [text, setText] = useState();
  const [toggle, setToggle] = useState(false);

  const registAccount = async () => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/auth/register",
        data
      );
      const result = response.data;
      const { msg } = result;
      await setText(msg);
      await setToggle(true);
      setInterval(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-slate-800 w-screen h-screen flex flex-col gap-5 justify-center font-quick">
      <div className=" flex justify-center">
        <div className=" absolute top-28">
          <h2 className=" text-4xl text-white">Posting Aja Dulu</h2>
        </div>
      </div>
      <div className=" flex justify-center">
        <form className=" flex flex-col p-12 max-sm:w-[350px] max-sm:h-80 bg-heikei bg-cover shadow-lg justify-center gap-2 rounded-xl">
          <input
            type="text"
            placeholder="Username"
            className=" p-2 rounded-lg focus:outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className=" p-2  rounded-lg focus:outline-none"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className=" p-2  rounded-lg focus:outline-none"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className=" flex justify-center text-green-500 text-sm">
            {toggle && <p>{text}</p>}
          </div>
          <div className=" flex justify-center">
            <button
              onClick={registAccount}
              className=" bg-white p-2 rounded-xl"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
