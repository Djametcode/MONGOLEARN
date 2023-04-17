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
    <div className=" flex justify-center">
      <img
        className=" w-20 h-20 object-cover rounded-full bg-center"
        src={avatar}
        alt=""
      />
    </div>
  );
};

export default ProfilePicture;
