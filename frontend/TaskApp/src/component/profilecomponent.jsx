import axios from "axios";
import { useEffect } from "react";

const ProfileComponent = () => {
  const id_user = localStorage.getItem("_id");
  const getUserById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v3/auth/user/${id_user}`
      );
      const item = response.data;
      console.log(item);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserById();
  }, []);
  return <div>Hello world</div>;
};

export default ProfileComponent;
