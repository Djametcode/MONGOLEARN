import Layout from "@/components/layout";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Profile() {
  const route = useRouter();
  const id = Cookies.get("id");
  const [user, setUser] = useState({});
  const [post, setPost] = useState([]);
  const getCurrentAcc = async () => {
    try {
      const response = await axios.get(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/auth/user/${id}`
      );
      const result = await response.data;
      console.log(result);
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
      {nav && (
        <div className=" md:hidden flex flex-col gap-5 text-lg p-5 absolute top-0 left-0 z-30 h-screen w-80 shadow-2xl transition-all bg-heikei3">
          <div
            onClick={closeNav}
            className=" cursor-pointer absolute top-3 right-3"
          >
            <svg
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className=" w-8 h-8"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </div>
          <div>
            <Link className="  p-2 rounded-lg text-white" href="/landing">
              Beranda
            </Link>
          </div>
          <div>
            <Link className="  p-2 rounded-lg text-white" href="/landing">
              Chat
            </Link>
          </div>
          <div>
            <Link className=" p-2 rounded-lg text-white" href="/profile">
              Akun
            </Link>
          </div>
          <div className=" bg-red-700 p-2 text-sm rounded-xl text-white">
            <button onClick={logOut}>LogOut</button>
          </div>
        </div>
      )}
      <div className=" fixed w-screen pl-6 z-20 flex justify-center bg-heikei3 shadow-2xl text-white h-16 font-quick">
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
      <div className=" bg-heikei3 h-full p-6 pt-20 flex flex-col gap-4 md:hidden font-quick">
        <div className=" flex flex-col gap-2 pb-5 border-slate-300/40 border-b">
          <div>
            <img
              className=" object-cover w-16 h-16 rounded-full"
              src={user.avatar}
              alt="user"
            />
          </div>
          <div className=" text-white flex flex-col justify-center text-sm">
            <p>{user.username}</p>
            <p>Hello world</p>
          </div>
          <div className=" absolute right-14 translate-y-3 flex gap-3 text-white text-sm">
            <div className=" flex flex-col justify-center">
              <p className=" text-center">0</p>
              <p>Postingan</p>
            </div>
            <div className=" flex flex-col justify-center">
              <p className=" text-center">0</p>
              <p>Postingan</p>
            </div>
            <div className=" flex flex-col justify-center">
              <p className=" text-center">0</p>
              <p>Postingan</p>
            </div>
          </div>
          <div className=" gap-3 flex text-sm">
            <p
              onClick={function refer() {
                route.push("/change-profile");
              }}
              className=" cursor-pointer bg-heikei3 text-white border border-slate-200/60 p-1 rounded-xl w-full text-center"
            >
              Edit Profil
            </p>
            <p className=" cursor-pointer bg-slate-100 bg-heikei3 text-white p-1 border border-slate-200/60 rounded-xl w-full text-center">
              Bagikan Profil
            </p>
          </div>
        </div>
        <div className=" text-white">
          <p>Postingan Saya</p>
        </div>
        <div>{}</div>
      </div>
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
