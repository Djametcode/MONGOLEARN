import Layout from "@/components/layout";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ContactMenu = ({ id, avatar, username, header }) => {
  const startchat = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v3/user/create-chat/",
        header
      );
      const result = await response.data;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={startchat}
      className=" flex flex-col bg-gray-200 shadow-lg m-1 p-2 rounded-xl cursor-pointer"
    >
      <div className=" flex justify-center w-28">
        <img
          src={avatar}
          className="rounded-full object-cover w-16 h-16"
          alt="avatar"
        />
      </div>
      <div className=" flex justify-center">
        <p className=" text-sm">{username}</p>
      </div>
    </div>
  );
};

export default function Pesan({ config }) {
  console.log(config);
  const [user, setUserList] = useState([]);
  const [header, setHeader] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
    const getAllChat = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v3/u/all-users"
        );
        const item = await response.data;
        console.log(item);
        const { userData } = item;
        setUserList(userData);
      } catch (error) {
        console.log(error);
      }
    };

    getAllChat();
  }, []);

  const [contact, setContact] = useState("none");
  const [button, setButton] = useState("block");

  const toggleContact = () => {
    setContact("flex");
    setButton("none");
  };
  return (
    <div className="">
      <div className=" h-20 flex flex-col justify-center pl-11">
        <h2 className=" text-2xl">Pesan</h2>
      </div>
      <div
        style={{ display: `${contact}` }}
        className=" flex-col justify-center h-[600px]"
      >
        <div className=" flex justify-center">
          <div className="  flex justify-center flex-wrap overflow-scroll w-[500px] h-[500px] bg-slate-300 shadow-xl p-3 rounded-xl">
            {user.map((item) => (
              <ContactMenu
                id={item.data.id}
                avatar={item.data.avatar}
                username={item.data.username}
                header={header}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" translate-y-[250px] flex flex-col justify-center">
        <div className=" flex justify-center">
          <button
            style={{ display: `${button}` }}
            onClick={toggleContact}
            className=" bg-slate-100 p-2 rounded-xl shadow-xl"
          >
            + Create Chat
          </button>
        </div>
      </div>
    </div>
  );
}

Pesan.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
