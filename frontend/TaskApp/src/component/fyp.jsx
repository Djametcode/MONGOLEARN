import axios from "axios";
import { useEffect, useState } from "react";

const Extend = ({ data }) => {
  const results = data.map((item) => <List key={data._id} data={item} />);
  return <div className=" text-white font-quick">{results}</div>;
};

const List = ({ data }) => {
  const { username, address, secret, date } = data;
  const formatdate = date.split("T")[0];
  return (
    <div className=" bg-wave flex flex-col p-4">
      <div className=" flex justify-between bg-slate-400/30 mb-2 rounded-lg">
        <div className=" w-full pb-4 p-2">
          <p>Dari : {username} </p>
        </div>
        <div className=" w-full flex gap-3 p-2">
          <p>{address}</p>
          <p>{formatdate}</p>
        </div>
      </div>
      <div className=" bg-slate-400/30 p-2 pb-48 rounded-xl">
        <p>{secret}</p>
      </div>
    </div>
  );
};

const ForYouPage = () => {
  const [fyp, setData] = useState([]);
  const getAllSecretMsg = async () => {
    try {
      const response = await axios.get(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/u/list"
      );
      const item = response.data;
      const { data } = item;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllSecretMsg();
  }, []);
  return (
    <div>
      <Extend data={fyp} />
    </div>
  );
};

export default ForYouPage;
