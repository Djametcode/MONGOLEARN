import axios from "axios";
import { useEffect, useState } from "react";

const ProfilePicture = () => {
  const id = localStorage.getItem("_id");
  const [avatar, setAvatar] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/auth/user/${id}`
      );
      const item = response.data;
      const {
        user: { avatar },
      } = item;
      setAvatar(avatar);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <img className=" w-10 h-10 rounded-full" src={avatar} alt="" />
    </div>
  );
};

export default ProfilePicture;
