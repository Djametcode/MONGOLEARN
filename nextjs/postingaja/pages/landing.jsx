import ForYouPage from "@/components/foryoupage";
import Layout from "@/components/layout";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const route = useRouter();
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
    <div>
      <div className=" bg-slate-300 flex flex-col justify-center max-sm:h-16 sticky top-0">
        <div className=" flex justify-between pl-11 pr-11">
          {nav && (
            <div className=" md:hidden flex flex-col gap-5 text-lg p-5 pt-12 absolute top-0 left-0 z-40 h-screen w-80 shadow-lg rounded-tr-2xl rounded-br-2xl transition-all bg-slate-100">
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
              <div className=" absolute bottom-14 bg-red-700 p-2 text-sm rounded-xl text-white">
                <button onClick={logOut}>LogOut</button>
              </div>
            </div>
          )}
          <div
            onClick={toggleNav}
            className=" cursor-pointer md:hidden flex flex-col justify-center -translate-x-7"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className=" w-9 h-9"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              />
            </svg>
          </div>
          <div className=" flex flex-col justify-center h-20">
            <h1 className=" text-2xl font-extrabold">Beranda</h1>
          </div>
          <div className=" flex flex-col justify-center max-sm:translate-x-7">
            <div className=" bg-slate-400/50 rounded-full">
              <svg
                className=" w-10 p-2 rounded-full"
                fill="grey"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ForYouPage />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
