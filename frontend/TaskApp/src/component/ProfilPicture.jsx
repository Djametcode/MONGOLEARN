import axios from "axios";
import { response } from "express";
import { useEffect } from "react";

const ProfilePicture = () => {
  const getAvatar = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v3/u/user/avatar/topek`
      );
    } catch (error) {
      console.log(response);
    }
  };
  useEffect(() => {
    getAvatar();
  }, []);
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default ProfilePicture;
