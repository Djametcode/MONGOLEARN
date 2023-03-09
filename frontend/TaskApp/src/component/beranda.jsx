import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ForYouPage from "./fyp";
import Menu from "./menu";

const Beranda = () => {
  const [data, setData] = useState([]);
  const getAllSecretMsg = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v3/u/list");
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
    <div className=" font-quick">
      <div className=" sticky top-0 flex">
        <h1 className=" bg-wave p-4 text-white w-full text-xl">
          Secret Message
        </h1>
        <div className=" flex flex-col justify-center bg-wave">
          <Link
            to="/landing"
            className=" bg-slate-400 p-2 -translate-x-3 text-white rounded-lg"
          >
            Daftar
          </Link>
        </div>
      </div>
      <Menu />
      <ForYouPage data={data} />
    </div>
  );
};

export default Beranda;
