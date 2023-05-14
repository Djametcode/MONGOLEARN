import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ChangeProfile() {
  const route = useRouter();
  const closePost = () => {
    route.push("/profile");
  };
  const [username, setUsername] = useState();
  const [address, setAddress] = useState();
  const [secret, setSecret] = useState();
  const [files, setFile] = useState();
  const id = Cookies.get("id");
  const item = new FormData();
  item.append("file", files);
  const data = Object.fromEntries(item);
  console.log(data);
  const token = Cookies.get("token");
  const updateProfile = async () => {
    event.preventDefault();
    try {
      const response = await axios.patchForm(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/auth/user/update-avatar/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.data;
      console.log(result);
      route.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex flex-col justify-center h-screen p-5 font-quick bg-heikei3">
      <div className=" transition-all md:hidden flex flex-col bg-heikei bg-cover justify-center rounded-xl shadow-xl p-10">
        <div
          onClick={closePost}
          className=" cursor-pointer absolute top-3 right-3"
        >
          <svg
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className=" w-7 h-7"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </div>
        <form className=" flex flex-col gap-2 justify-center">
          {/* <input
            className=" focus:outline-none p-2 placeholder:text-black rounded-xl shadow-sm"
            type="text"
            placeholder="Nama"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className=" focus:outline-none p-2 placeholder:text-black rounded-xl shadow-sm"
            type="text"
            placeholder="Alamat"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className=" focus:outline-none p-2 placeholder:text-black rounded-xl shadow-sm"
            type="text"
            placeholder="Pesan"
            onChange={(e) => setSecret(e.target.value)}
          /> */}
          <input
            className=" text-white focus:outline-none p-2 placeholder:text-black rounded-xl shadow-sm"
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div className=" flex justify-center">
            <button
              onClick={updateProfile}
              className=" bg-white p-2 rounded-lg shadow-sm"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
