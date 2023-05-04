import Layout from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Pesan() {
  const [chat, setChat] = useState([]);
  console.log(chat);

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
        const { data } = item;
        setChat(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllChat();
  }, []);
  return (
    <>
      <div className=" flex flex-col">
        {chat.map((item) => (
          <>
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
            <Link
              href="/"
              className=" flex p-7 pl-9 gap-3 relative z-0 cursor-pointer"
            >
              <div className=" flex flex-col justify-center">
                <img
                  src={item.avatar}
                  className=" rounded-full w-14 h-14 object-cover"
                  alt=""
                  srcset=""
                />
              </div>
              <div className=" flex flex-col justify-center">
                {item.chat[0].createdBy}
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}

Pesan.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
