import { useContext, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ItemContext } from "../App";

const Input = () => {
  const { getAllData } = useContext(ItemContext);
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [secretmsg, setSecret] = useState("");
  const [img, setImg] = useState("");

  const usernameref = useRef();
  const addressRef = useRef();
  const secretMsgRef = useRef();
  const imgref = useRef(null);

  const data = {
    username: username,
    address: address,
    secret: secretmsg,
    images: img[0],
  };
  console.log(data);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/user",
        data,
        config
      );
      getAllData();
      event.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    setUsername(usernameref.current.value);
    setAddress(addressRef.current.value);
    setSecret(secretMsgRef.current.value);
    setImg(imgref.current.files);
  };
  return (
    <div>
      <form className=" bg-slate-600/50 h-full p-7 m-2 rounded-xl flex flex-col gap-2 font-quick">
        <input
          className=" p-2 focus:outline-none rounded-lg focus:bg-slate-600 focus:text-white/20"
          type="text"
          placeholder="Nama"
          ref={usernameref}
          onChange={handleChange}
        />
        <input
          className=" p-2 focus:outline-none rounded-lg focus:bg-slate-600 focus:text-white/20"
          type="text"
          placeholder="Alamat"
          ref={addressRef}
          onChange={handleChange}
        />
        <div className=" m-0 p-0">
          <input
            className="p-2 focus:outline-none rounded-lg focus:pb-48 w-full placeholder:absolute focus:bg-slate-600 focus:text-white/20"
            type="text"
            placeholder="Secret Message"
            ref={secretMsgRef}
            onChange={handleChange}
          />
        </div>
        <input ref={imgref} type="file" />
        <div className=" flex justify-center">
          <Link
            onClick={handleSubmit}
            className=" bg-slate-400/30 p-2 rounded-lg"
          >
            Kirim Secret Message
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Input;
