import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FormData from "form-data";

const UpdateProfile = () => {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState();
  console.log(avatar);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const id = localStorage.getItem("_id");
  const updateData = async (e) => {
    event.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("file", avatar, "file");
    const data = Object.fromEntries(formData);
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
  // const handleChange = () => {
  //   const file = imgref.current.files[0];
  //   console.log(file);
  //   transform(file);
  // };

  // const transform = (file) => {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     reader.readAsDataURL(file);
  //     setAvatar(reader.result);
  //   };
  // };

  return (
    <div className=" bg-teal-700 p-3">
      <div className=" font-quick pb-3">
        <Link className=" underline underline-offset-4" to="/">
          Kembali ke beranda
        </Link>
      </div>
      <form
        onSubmit={updateData}
        className=" flex flex-col justify-center gap-1 font-quick"
      >
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="email"
        />
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="password"
        />
        <input
          type="file"
          name="file"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <input type="submit" />
      </form>
      <div className=" flex justify-center font-quick">
        <button type="submit" className=" rounded-lg p-1 bg-slate-500">
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
