import axios from "axios";
import { useEffect, useState } from "react";
import Hamburger from "./hamburger";
import ProfileStory from "./profileStory";

const Story = () => {
  const [users, setUser] = useState([]);
  console.log(users);
  console.log(users);
  const getAllUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v3/auth/user"
      );
      const item = response.data;
      const { filterdImage } = item;
      console.log(filterdImage);
      setUser(filterdImage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div className=" flex justify-start p-2 gap-2 overflow-scroll">
      {users.map((item) => (
        <div className="">
          <div className=" w-14 h-14 flex justify-center">
            <img
              className=" rounded-full object-cover"
              src={item.image}
              alt=""
            />
          </div>
          <div className=" flex justify-center font-quick">
            <p className=" text-base overflow-scroll ">{item.username}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Story;
