import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState();

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

      Cookies.set("id", id_user);
      Cookies.set("token", token);
      router.push("/landing");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const image = "/components/image/bg.svg";
    setImage(image);
  });
  return (
    <div className=" bg-slate-300 w-screen h-screen flex flex-col gap-5 justify-center font-quick">
      <div className=" flex justify-center">
        <div className=" absolute top-28">
          <h2 className=" text-4xl">Posting Aja Dulu</h2>
        </div>
      </div>
      <div className=" flex justify-center">
        <form
          // style={{ backgroundImage: "url('/bg.svg')" }}
          id="form"
          className=" bg-heikei flex bg-cover flex-col bg-heike shadow-lg h-80 pl-24 pr-24 justify-center gap-3 rounded-xl"
        >
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
            <button onClick={login} className=" bg-white p-1 rounded-xl">
              Login
            </button>
          </div>
          <div className=" text-white flex text-sm gap-2">
            <p className="">Belum punya akun?</p>
            <Link href="/regist">Buat Akun</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
