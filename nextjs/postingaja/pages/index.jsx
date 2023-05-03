import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const data = {
    email: email,
    password: password,
  };
  console.log(data);

  const login = async () => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/auth/login",
        data
      );
      const result = await response.data;
      const {
        user: { id_user },
        token,
      } = result;

      localStorage.setItem("id", id_user);
      localStorage.setItem("token", token);
      router.push("/landing");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-slate-300 w-screen h-screen flex flex-col gap-5 justify-center font-quick">
      <div className=" flex justify-center">
        <div className=" absolute top-28">
          <h2 className=" text-4xl">Posting Aja Dulu</h2>
          <p className=" text-center underline underline-offset-4">
            Karya anak bangsa
          </p>
        </div>
      </div>
      <div className=" flex justify-center">
        <form className=" flex flex-col bg-lime-400 shadow-lg h-72 pl-24 pr-24 justify-center gap-3 rounded-xl">
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
          <div className=" flex justify-center">
            <button onClick={login} className=" bg-white p-2 rounded-xl">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
