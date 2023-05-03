import Layout from "@/components/layout";
import axios from "axios";
import { useEffect } from "react";

export default function Pesan() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const getAllChat = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v3/user/chat/${id}`,
          config
        );
        const item = await response.data;
        console.log(item);
      } catch (error) {
        console.log(error);
      }
    };

    getAllChat();
  }, []);
  return (
    <>
      <div className=" flex flex-col">
        <div className=" sticky top-0 pl-11 z-10 bg-slate-300 text-2xl flex justify-between pr-11 border-b border-slate-300 h-20">
          <div className=" flex flex-col justify-center">
            <h1>Pesan</h1>
          </div>
          <div className=" flex flex-col justify-center">
            <svg
              className=" w-10 bg-gray-400/40 p-2 rounded-full"
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
        <div className=" flex p-7 pl-9 gap-3 relative z-0">
          <div className=" flex flex-col justify-center">
            <svg
              className=" w-14 h-14"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
              />
            </svg>
          </div>
          <div className=" flex flex-col justify-center">
            <p>Djamet coder</p>
            <p className=" text-xs">Hello world</p>
          </div>
        </div>
        <div className=" flex p-7 pl-9 gap-3 ">
          <div className=" flex flex-col justify-center">
            <svg
              className=" w-14 h-14"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
              />
            </svg>
          </div>
          <div className=" flex flex-col justify-center">
            <p>Djamet coder</p>
            <p className=" text-xs">Hello world</p>
          </div>
        </div>
        <div className=" flex p-7 pl-9 gap-3 ">
          <div className=" flex flex-col justify-center">
            <svg
              className=" w-14 h-14"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
              />
            </svg>
          </div>
          <div className=" flex flex-col justify-center">
            <p>Djamet coder</p>
            <p className=" text-xs">Hello world</p>
          </div>
        </div>
        <div className=" flex p-7 pl-9 gap-3 ">
          <div className=" flex flex-col justify-center">
            <svg
              className=" w-14 h-14"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
              />
            </svg>
          </div>
          <div className=" flex flex-col justify-center">
            <p>Djamet coder</p>
            <p className=" text-xs">Hello world</p>
          </div>
        </div>
        <div className=" flex p-7 pl-9 gap-3 ">
          <div className=" flex flex-col justify-center">
            <svg
              className=" w-14 h-14"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
              />
            </svg>
          </div>
          <div className=" flex flex-col justify-center">
            <p>Djamet coder</p>
            <p className=" text-xs">Hello world</p>
          </div>
        </div>
        <div className=" flex p-7 pl-9 gap-3 ">
          <div className=" flex flex-col justify-center">
            <svg
              className=" w-14 h-14"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
              />
            </svg>
          </div>
          <div className=" flex flex-col justify-center">
            <p>Djamet coder</p>
            <p className=" text-xs">Hello world</p>
          </div>
        </div>
        <div className=" flex p-7 pl-9 gap-3 ">
          <div className=" flex flex-col justify-center">
            <svg
              className=" w-14 h-14"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
              />
            </svg>
          </div>
          <div className=" flex flex-col justify-center">
            <p>Djamet coder</p>
            <p className=" text-xs">Hello world</p>
          </div>
        </div>
        <div className=" flex p-7 pl-9 gap-3 ">
          <div className=" flex flex-col justify-center">
            <svg
              className=" w-14 h-14"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
              />
            </svg>
          </div>
          <div className=" flex flex-col justify-center">
            <p>Djamet coder</p>
            <p className=" text-xs">Hello world</p>
          </div>
        </div>
      </div>
    </>
  );
}

Pesan.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
