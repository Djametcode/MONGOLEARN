import axios from "axios";
import { useEffect, useState } from "react";
import FooterBeranda from "./footerberanda";
import ProfileStory from "./profileStory";

const Extend = ({ data, refresh }) => {
  const results = data.map((item, index) => (
    <List key={data._id} data={item} refresh={refresh} />
  ));
  return <div className=" text-white font-quick">{results}</div>;
};

// const Images = ({ data }) => {
//   const [img, setImg] = useState(data.secure_url);
//   return (
//     <div>
//       <img src={img} alt="" />
//     </div>
//   );
// };
const List = ({ data, refresh }) => {
  const { username, address, secret, date, like, _id, image, comment } = data;

  const formatdate = date.split("T")[0];
  return (
    <div className=" mb-6 flex flex-col text-sm ml-2 mr-2 mt-2">
      <div className=" flex justify-start bg-slate-100 rounded-t-2xl">
        <div className=" scale-75">
          <ProfileStory />
        </div>
        <div className=" flex flex-col justify-center">
          <p className=" w-56 text-black">{username} </p>
        </div>
      </div>
      <div className=" rounded-b-2xl">
        <img
          className=" w-screen h-72 object-cover"
          src={image.secure_url}
          alt=""
        />
      </div>
      <FooterBeranda
        data={data}
        id={_id}
        refresh={refresh}
        comments={comment}
      />
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
      <Extend data={fyp} refresh={getAllSecretMsg} />
    </div>
  );
};

export default ForYouPage;
