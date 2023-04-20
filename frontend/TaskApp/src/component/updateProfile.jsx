import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormData from "form-data";

const UpdateProfile = () => {
  const [avatars, setAvatar] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate;
  const config = {
    headers: {
      accept: "*/*",
      authorization: `Bearer ${token}`,
      enctype: "multipart/form-data",
    },
  };

  const data = new FormData();
  data.append("file", avatars);
  const result = Object.fromEntries(data);
  console.log(result);

  const id = localStorage.getItem("_id");
  const updateData = async () => {
    event.preventDefault();
    try {
      const response = await axios.patchForm(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/auth/user/update-avatar/${id}`,
        result,
        config
      );
      const data = response.data;
      console.log(data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const data = e.target.files[0];
    // console.log(data);
    // transform(data);
    setAvatar(data);
  };

  // const transform = (files) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(files);
  //   reader.onloadend = () => {
  //     setAvatar(reader.result);
  //   };
  // };

  return (
    <div className=" bg-teal-700 p-3">
      <div className=" font-quick pb-3">
        <Link className=" underline underline-offset-4" to="/profile">
          Kembali ke beranda
        </Link>
      </div>
      <form
        encType="multipart/form-data"
        className=" flex flex-col justify-center gap-1 font-quick"
      >
        <input
          className=" p-2 focus:outline-none"
          type="text"
          placeholder="username"
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
        <input type="file" onChange={handleChange} />
        <div className=" flex justify-center font-quick">
          <button
            type="submit"
            onClick={updateData}
            className=" rounded-lg p-1 bg-slate-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
