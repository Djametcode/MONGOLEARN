import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProfileStory from "./profileStory";
import StorySvg from "./storysvg";
import SquareSVG from "./squaresvg";
import ReelsSVG from "./reelssvg";
import TagsSVG from "./tags";
import { useEffect, useState } from "react";

const ImagePost = ({ data }) => {
  console.log(data);
  return <img className=" w-48 h-48" src={data.secure_url} alt="" />;
};

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

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const [post, setPost] = useState([]);
  console.log(post);
  const getAllData = async () => {
    try {
      const response = await axios.get(
        "ttps://grumpy-worm-stockings.cyclic.app/api/v3/user",
        config
      );
      const item = response.data;
      const { data } = item;
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className=" pb-1 font-quick bg-slate-100 text-black pt-5">
      <div className=" flex justify-around">
        <div>
          <ProfileStory />
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" flex justify-center">
            <p>0</p>
          </div>
          <div className=" flex justify-center">
            <p>Postingan</p>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" flex justify-center">
            <p>0</p>
          </div>
          <div>
            <p>Pengikut</p>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <div className=" flex justify-center">
            <p>0</p>
          </div>
          <div>
            <p>Pengikut</p>
          </div>
        </div>
      </div>
      <div className=" p-1 pl-5">
        <p>{username}</p>
      </div>
      <div className=" flex ml-4 mr-4 gap-2 text-white">
        <div className=" bg-slate-500 rounded-lg p-1 w-full text-center">
          <p>Edit Profil</p>
        </div>
        <div className=" bg-slate-500 rounded-lg p-1 w-full text-center">
          <p>Bagikan Profil</p>
        </div>
      </div>
      <div className=" flex pl-3 pt-3 gap-3">
        <div>
          <StorySvg />
          <p className=" text-sm">Cerita</p>
        </div>
        <div>
          <StorySvg />
          <p className=" text-sm">Cerita</p>
        </div>
        <div>
          <StorySvg />
          <p className=" text-sm">Cerita</p>
        </div>
      </div>
      <div className=" flex h-14 justify-around">
        <div className=" flex flex-col justify-center">
          <SquareSVG />
        </div>
        <div className=" flex flex-col justify-center">
          <ReelsSVG />
        </div>
        <div className=" flex flex-col justify-center">
          <TagsSVG />
        </div>
      </div>
      <div className=" flex gap-1 justify-around flex-wrap flex-row">
        {post.map((item) => (
          <ImagePost data={item.image} />
        ))}
      </div>
      {/* <div className=" flex justify-center">
        <button
          className=" bg-red-600 text-white/40 p-2 rounded-lg m-3 w-40"
          onClick={deleteAccount}
        >
          Hapus akun
        </button>
      </div>
      <div className=" bg-slate-300/40 m-3 mb-14 rounded-lg h-96 text-slate-300 p-4">
        <p>Tutor :</p>
        <ul>
          <li>1. Gunakan tombol hapus akun untuk menghapus akun</li>
          <li>2. Klik gambar user lalu log out, untuk log out</li>
          <li>
            3. Jangan refresh ketika sudah login, ngebug jir belum ketemu fixnya
          </li>
          <li>4. Enjoy soon fitur upload foto</li>
        </ul>
      </div> */}
    </div>
  );
};

export default ProfileComponent;
