import { useRouter } from "next/router";
import avatar from "./image/user.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  const router = useRouter();
  const Logout = () => {
    localStorage.clear();
    router.push("/");
  };
  const [background, setBackground] = useState();
  const [color, setColor] = useState();
  const [pesanBg, setPesanBg] = useState();
  const [pesanClr, setPesanClr] = useState();
  const [callBg, setCallBg] = useState();
  const [settingBg, setSettingBg] = useState();

  useEffect(() => {
    if (router.pathname === "/landing") {
      setBackground("blue");
      setColor("white");
      setPesanBg("");
      setPesanClr("");
    }
    if (router.pathname === "/pesan") {
      setBackground("");
      setColor("black");
      setPesanBg("blue");
      setPesanClr("white");
    }
  });
  return (
    <>
      <div className=" shadow-lg flex font-quick relative bg-slate-200 h-screen">
        <div className=" flex flex-col max-md:hidden">
          <div className=" flex flex-col justify-center h-20">
            <div className=" flex justify-start pl-5 ">
              <svg
                className=" w-8 h-8"
                fill="blue"
                stroke="lightgrey"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <h1 className=" text-2xl">ChatBox</h1>
            </div>
          </div>
          <div className=" p-3 flex flex-col gap-3 w-60 h-full">
            <Link
              href="/landing"
              style={{ backgroundColor: `${background}`, color: `${color}` }}
              className="rounded-xl p-2 flex gap-6 justify-start cursor-pointer"
            >
              <div>
                <svg
                  className=" w-6"
                  fill="none"
                  stroke="grey"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </div>
              <div className=" flex flex-col justify-center">
                <p className=" text-sm">Beranda</p>
              </div>
            </Link>
            <Link
              href="/pesan"
              className=" rounded-xl p-2 flex gap-6 justify-start cursor-pointer"
              style={{ backgroundColor: `${pesanBg}`, color: `${pesanClr}` }}
            >
              <div>
                <svg
                  className=" w-6"
                  fill="none"
                  stroke="grey"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </div>
              <div className=" flex flex-col justify-center">
                <p className=" text-sm">Pesan</p>
              </div>
            </Link>
            <div className=" rounded-xl p-2 flex gap-6 justify-start">
              <div>
                <svg
                  className=" w-6"
                  fill="none"
                  stroke="grey"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div className=" flex flex-col justify-center">
                <p className=" text-sm">Panggilan</p>
              </div>
            </div>
            <div className=" rounded-xl p-2 flex gap-6 justify-start">
              <div>
                <svg
                  className=" w-6"
                  fill="none"
                  stroke="grey"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className=" flex flex-col justify-center">
                <p className=" text-sm">Pengaturan</p>
              </div>
            </div>
            <div className=" absolute bottom-5 flex flex-col justify-center h-20 w-36">
              <div className=" flex gap-3">
                <Image
                  src={avatar}
                  className=" w-8 h-8 bg-slate-200 rounded-full"
                />
                <div className=" text-xs">
                  <p>Tofik Hidayat</p>
                  <p
                    onClick={Logout}
                    className=" text-xs cursor-pointer text-slate-500"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full w-screen overflow-hidden overflow-y-auto border max-sm:border-none border-l border-r border-slate-300">
          {children}
        </div>
      </div>
      <div className=" bg-heikei3 z-30 text-white w-screen p-5 sticky bottom-0 flex flex-col justify-center">
        <Navbar />
      </div>
    </>
  );
}
