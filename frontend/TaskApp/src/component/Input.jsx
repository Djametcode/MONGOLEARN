import { useRef, useState } from "react";
import axios from "axios";

const Input = () => {
  const [username, setUsername] = useState();
  const [address, setAddress] = useState();

  const usernameref = useRef();
  const addressRef = useRef();

  const data = {
    username: username,
    address: address,
  };
  console.log(data);
  const handleSubmit = async () => {
    try {
      await setUsername(usernameref.current.value);
      await setAddress(addressRef.current.value);

      await axios.post("http://localhost:3000/api/v3/user", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className=" bg-slate-600/50 h-60 p-7 m-2 rounded-xl flex flex-col gap-2 font-quick">
        <input
          className=" p-2 focus:outline-none rounded-lg"
          type="text"
          placeholder="Username"
          ref={usernameref}
        />
        <input
          className=" p-2 focus:outline-none rounded-lg"
          type="text"
          placeholder="Address"
          ref={addressRef}
        />
        <div className=" flex justify-center">
          <input
            onClick={handleSubmit}
            className=" bg-slate-300 p-2 rounded-lg w-32"
            type="submit"
            value="Tambah Kontak"
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
