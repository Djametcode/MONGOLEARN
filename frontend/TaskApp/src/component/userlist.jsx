import axios from "axios";
import { useEffect, useState } from "react";

const DeleteButton = ({ data, id, setUser }) => {
  const handleDelete = async () => {
    try {
      const filter = data.filter((item) => item._id !== id);
      await axios.delete(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/auth/user/${id}`
      );
      await setUser(filter);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={handleDelete} className=" bg-slate-200 rounded-lg p-1">
      Hapus User
    </button>
  );
};

const UserMap = ({ data, setUser }) => {
  const result = data.map((item) => (
    <div
      key={item._id}
      className=" bg-slate-400/60 p-2 m-1 rounded-lg flex justify-between"
    >
      <div>
        <p>username: {item.username}</p>
        <p>Email: {item.email}</p>
      </div>
      <div>
        <DeleteButton data={data} id={item._id} setUser={setUser} />
      </div>
    </div>
  ));
  return <div className=" flex flex-col">{result}</div>;
};
const UserList = () => {
  const [user, setUser] = useState([]);
  console.log(user);
  const getAllUser = async () => {
    try {
      const response = await axios.get(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/auth/user"
      );
      const item = response.data;
      const {
        list: { user },
      } = item;
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div className=" bg-slate-200 p-2">
      <h1 className=" text-2xl p-2">User List :</h1>
      <UserMap data={user} setUser={setUser} />
    </div>
  );
};

export default UserList;
