import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostForm() {
  const route = useRouter();
  const [username, setUsername] = useState();
  const [address, setAddress] = useState();
  const [secret, setSecret] = useState();
  const [file, setFile] = useState();

  const closePost = () => {
    route.push("/landing");
  };

  const token = Cookies.get("token");

  const postItem = async () => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("address", address);
      formData.append("secret", secret);
      formData.append("file", file);
      const result = Object.fromEntries(formData);

      await axios.postForm(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/user",
        result,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      closePost();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" h-screen flex flex-col justify-center m-5 font-quick">
      <div className=" transition-all md:hidden flex justify-center h-96 bg-slate-100 rounded-xl shadow-xl p-10">
        <div
          onClick={closePost}
          className=" cursor-pointer absolute top-3 right-3"
        >
          <svg
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className=" w-7 h-7"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </div>
        <form className=" flex flex-col gap-2 justify-center">
          <input
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
          />
          <input
            className=" focus:outline-none p-2 placeholder:text-black rounded-xl shadow-sm"
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div className=" flex justify-center">
            <button
              onClick={postItem}
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
