import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();

  const imgRef = useRef();

  const data = {
    avatar: avatar,
  };

  console.log(data);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const id = localStorage.getItem("_id");
  const updateData = async () => {
    try {
      await axios.patch(
        `http://localhost:3000/api/v3/auth/user/update-avatar/${id}`,
        config,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = () => {
    const file = imgRef.current.files[0];
    transform(file);
  };

  const transform = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className=" bg-teal-700 p-3">
      <div className=" font-quick pb-3">
        <Link className=" underline underline-offset-4" to="/">
          Kembali ke beranda
        </Link>
      </div>
      <form className=" flex flex-col justify-center gap-1 font-quick">
        <input
          onChange={(e) => setUsername(e.target.value)}
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="username"
        />
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="password"
        />
        <input
          type="file"
          accept="*"
          ref={imgRef}
          name="avatar"
          onChange={handleChange}
        />
      </form>
      <div className=" flex justify-center font-quick">
        <button onClick={updateData} className=" rounded-lg p-1 bg-slate-500">
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
