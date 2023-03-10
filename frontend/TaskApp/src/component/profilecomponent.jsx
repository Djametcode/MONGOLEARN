import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("_id");
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
        <h1 className=" p-2 translate-x-4 bg-slate-400/40 m-2 rounded-lg">
          Profil Saya :
        </h1>
      </div>

      <div className=" bg-slate-400/40 text-black/50 p-3 pb-28 m-4 rounded-lg flex flex-col gap-2">
        <p className=" bg-slate-500 p-2 rounded-lg">Username :{username}</p>
        <p className=" bg-slate-500 p-2 rounded-lg">Email: {email}</p>
      </div>
      <div className=" flex justify-center">
        <button
          className=" bg-red-600 text-white/40 p-2 rounded-lg m-3 w-40"
          onClick={deleteAccount}
        >
          Hapus akun
        </button>
      </div>
      <div className=" bg-slate-300/40 m-3 rounded-lg h-96 text-slate-300 p-4">
        <p>Tutor :</p>
        <ul>
          <li>1. Gunakan tombol hapus akun untuk menghapus akun</li>
          <li>2. Klik gambar user lalu log out, untuk log out</li>
          <li>
            3. Jangan refresh ketika sudah login, ngebug jir belum ketemu fixnya
          </li>
          <li>4. Enjoy soon fitur upload foto</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileComponent;
