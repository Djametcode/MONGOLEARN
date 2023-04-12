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
        "https://grumpy-worm-stockings.cyclic.app/api/v3/auth/user"
      );
      const item = response.data;
      const { username } = item;
      setUser(username);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div>
      <div className=" flex overflow-scroll gap-2 p-3">
        {users.map((item, index) => (
          <>
            <div className=" font-quick">
              <div className=" bg-slate-200 rounded-full">
                <ProfileStory />
              </div>
              <div className=" flex justify-center">
                <p className=" w-12 overflow-scroll">{item}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Story;
