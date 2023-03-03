import { useRef, useState } from "react";
import axios from "axios";

const Input = () => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [secretmsg, setSecret] = useState("");

  const usernameref = useRef();
  const addressRef = useRef();
  const secretMsgRef = useRef();

  const data = {
    username: username,
    address: address,
    secret: secretmsg,
  };
  console.log(data);
  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/user",
        data
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = () => {
    setUsername(usernameref.current.value);
    setAddress(addressRef.current.value);
    setSecret(addressRef.current.value);
  };
  return (
    <div>
      <form
        action="/"
        className=" bg-slate-600/50 h-full p-7 m-2 rounded-xl flex flex-col gap-2 font-quick"
      >
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

        <div className=" flex justify-center">
          <input
            onClick={handleSubmit}
            className=" bg-slate-300 p-2 rounded-lg"
            type="submit"
            value="Kirim Pesan Rahasia"
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
