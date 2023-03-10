import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("id");
  const deleteAccount = async () => {
    try {
      await axios.delete(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/auth/user/${id}`
      );
      await localStorage.removeItem("name");
      await localStorage.removeItem("email");
      await localStorage.removeItem("id");
      await navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" font-quick">
      <div className=" flex justify-between">
        <h1 className=" p-3 bg-slate-400/40 m-2 rounded-lg">Profil Saya :</h1>
        <div className=" flex flex-col justify-center">
          <button
            className=" bg-red-600 text-white/40 p-2 rounded-lg -translate-x-6"
            onClick={deleteAccount}
          >
            Hapus akun
          </button>
        </div>
      </div>

      <div className=" bg-slate-400/40 p-3 pb-28 m-2 rounded-lg flex flex-col gap-2">
        <p className=" bg-slate-500 p-2 rounded-lg">Username :{username}</p>
        <p className=" bg-slate-500 p-2 rounded-lg">Email: {email}</p>
      </div>
    </div>
  );
};

export default ProfileComponent;
