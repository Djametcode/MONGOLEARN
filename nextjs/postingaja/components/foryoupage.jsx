import axios from "axios";
import { useEffect, useState } from "react";

export default function ForYouPage() {
  const [data, setData] = useState([]);
  const getAllFyp = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v3/u/list");
      const result = response.data;
      const { data } = result;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFyp();
  }, []);
  return (
    <>
      {data.map((item) => (
        <div className=" flex justify-center">
          <div className=" bg-slate-200 rounded-xl w-screen flex justify-center">
            <div className="">
              <p>{item.createdBy}</p>
              <img
                className=" w-[700px] h-[400px] object-cover"
                src={item.image.secure_url}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
