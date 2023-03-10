import axios from "axios";
import { useEffect, useState } from "react";
import FooterBeranda from "./footerberanda";

const Extend = ({ data, getAllSecretMsg }) => {
  const results = data.map((item) => (
    <List key={data._id} data={item} getAllSecretMsg={getAllSecretMsg} />
  ));
  return <div className=" text-white font-quick">{results}</div>;
};

const List = ({ data, getAllSecretMsg }) => {
  console.log(data);
  const { username, address, secret, date, like, _id } = data;
  const formatdate = date.split("T")[0];
  return (
    <div className=" bg-wave flex flex-col p-4 text-sm">
      <div className=" flex justify-start bg-slate-400/30 mb-2 rounded-lg">
        <div className=" flex flex-col pb-4 p-3">
          <p className=" w-56">Dari : {username} </p>
          <p className=" w-full">Alamat: {address}</p>
        </div>
        <div className=" w-full flex justify-end gap-3 p-3">
          <p>{formatdate}</p>
        </div>
      </div>
      <div className=" bg-slate-400/30 p-3 pb-48 rounded-xl">
        <p>Pesan: {secret}</p>
      </div>
      <FooterBeranda like={like} id={_id} getAllSecretMsg={getAllSecretMsg} />
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
      <Extend data={fyp} getAllSecretMsg={getAllSecretMsg} />
    </div>
  );
};

export default ForYouPage;
