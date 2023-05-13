import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Profile() {
  const route = useRouter();
  const id = Cookies.get("id");
  const [user, setUser] = useState({});
  const getCurrentAcc = async () => {
    try {
      const response = await axios.get(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/auth/user/${id}`
      );
      const result = await response.data;
      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCurrentAcc();
  }, []);
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(true);
  };
  const closeNav = () => {
    setNav(false);
  };
  const logOut = () => {
    Cookies.remove("id");
    Cookies.remove("token");
    route.push("/");
  };
  return (
    <>
      <div className=" fixed w-screen pl-6 flex justify-center bg-heikei2 h-16 font-quick">
        {nav && (
          <div className=" md:hidden flex flex-col gap-5 text-lg p-5 pt-12 absolute top-0 left-0 z-40 h-screen w-80 shadow-lg transition-all bg-heikei2">
            <div
              onClick={closeNav}
              className=" cursor-pointer absolute top-3 right-3"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className=" w-8 h-8"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <div>
              <Link
                className=" bg-cyan-300 p-2 rounded-lg text-white"
                href="/landing"
              >
                Beranda
              </Link>
            </div>
            <div>
              <Link
                className=" bg-cyan-300 p-2 rounded-lg text-white"
                href="/landing"
              >
                Chat
              </Link>
            </div>
            <div>
              <Link
                className=" bg-cyan-300 p-2 rounded-lg text-white"
                href="/profile"
              >
                Akun
              </Link>
            </div>
            <div className=" absolute bottom-3 bg-red-700 p-2 text-sm rounded-xl text-white">
              <button onClick={logOut}>LogOut</button>
            </div>
          </div>
        )}
        <div
          onClick={toggleNav}
          className=" cursor-pointer absolute left-4 top-4 flex flex-col justify-center"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className=" w-8 h-8"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
            />
          </svg>
        </div>
        <div className=" flex flex-col justify-center">
          <h1 className=" text-xl">Profile</h1>
        </div>
      </div>
      <div className=" p-6 pt-20 flex flex-col gap-4 bg-heikei2 h-screen md:hidden font-quick">
        <div className=" flex gap-5">
          <div>
            <img
              className=" object-cover w-16 h-16 rounded-full"
              src={user.avatar}
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-center text-xl">
            <p>{user.username}</p>
          </div>
        </div>
        <div className=" flex">
          <Link href="change-profile" className=" p-1 rounded-xl bg-slate-100">
            Ganti foto Profil
          </Link>
        </div>
      </div>
    </>
  );
}
