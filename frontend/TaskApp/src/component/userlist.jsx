import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [user, setUser] = useState();
  const getAllUser = async () => {
    try {
      const response = await axios.get(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/auth/user"
      );
      const item = response.data;
      const {
        list: { jumlah },
      } = item;
      setUser(jumlah);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div className=" bg-wave text-white/40 p-2 pb-9 text-sm flex text-center flex-col">
      <h1 className=" p-2">Tercatat {user} user aktif di Posting Aja dulu</h1>
      <p>Ayo daftar gratis kok !</p>
    </div>
  );
};

export default UserList;
