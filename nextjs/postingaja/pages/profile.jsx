import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Profile() {
  const id = Cookies.get("id");
  const [user, setUser] = useState();
  console.log(user);
  const getCurrentAcc = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v3/auth/user/${id}`
      );
      const result = await response.data;
      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCurrentAcc();
  }, []);
  return (
    <div className=" p-6 bg-slate-200 h-screen md:hidden font-quick">
      <div className=" flex flex-col gap-2">
        <div>
          <img className=" w-16 h-16 rounded-full" src="" alt="" />
        </div>
        <div>
          <p></p>
        </div>
        <div className=" flex">
          <p className=" p-1 rounded-xl bg-slate-100">Ganti foto Profil</p>
        </div>
      </div>
    </div>
  );
}
