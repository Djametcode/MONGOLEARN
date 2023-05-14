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
      <div className=" bg-heikei3 text-white flex flex-col justify-center max-sm:h-16 fixed top-0 w-full">
        <div className=" flex justify-center pl-11 pr-11">
          {nav && (
            <div className=" md:hidden flex flex-col gap-5 text-lg p-5 pt-12 absolute top-0 left-0 z-40 h-screen w-80 shadow-lg transition-all bg-heikei3">
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
                <Link className=" p-2 rounded-lg text-white" href="/landing">
                  Beranda
                </Link>
              </div>
              <div>
                <Link className=" p-2 rounded-lg text-white" href="/landing">
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
          <div
            onClick={toggleNav}
            className=" absolute left-6 top-4 cursor-pointer md:hidden flex flex-col justify-center"
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
