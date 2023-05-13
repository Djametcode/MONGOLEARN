import axios from "axios";
import { useEffect, useState } from "react";
import FooterFyp from "./footerFyp";
import CreatePost from "./createPost";
import PostForm from "../pages/postForm";
import { useRouter } from "next/router";

export default function ForYouPage() {
  const route = useRouter();
  const [datas, setData] = useState([]);
  const getAllFyp = async () => {
    try {
      const response = await axios.get(
        "https://grumpy-worm-stockings.cyclic.app/api/v3/u/list"
      );
      const result = response.data;
      const { data } = result;
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [post, togglePost] = useState(false);
  useEffect(() => {
    getAllFyp();
  }, []);
  return (
    <>
      {datas.map((item) => (
        <div className=" flex justify-center">
          <div className=" bg-slate-200 p-4 w-screen flex justify-center">
            <div className=" bg-slate-50 shadow-xl flex flex-col rounded-xl">
              <div className=" md:pb-4 pt-3 pl-4 flex gap-2 text-lg font-extrabold">
                <div>
                  <img
                    className=" rounded-full w-11 h-11 object-cover"
                    src={item.createdBy.avatar}
                    alt=""
                  />
                </div>
                <div className=" flex flex-col justify-center text-base">
                  <p>{item.createdBy.username}</p>
                </div>
              </div>
              <img
                className=" max-sm:rounded-2xl max-sm:h-72 max-sm:w-screen max-sm:p-4 max-sm:pl-0 max-sm:pr-0 w-[700px] h-[400px] object-cover overflow-y-scroll"
                src={item.image.secure_url}
                alt=""
              />
              <div className=" pl-4 pb-4">
                <FooterFyp text={item.secret} like={item.like} />
              </div>
            </div>
          </div>
          <div
            onClick={function refere() {
              route.push("/postForm");
            }}
            className=" md:hidden absolute bottom-14 right-2"
          >
            <CreatePost toggle={togglePost} getPost={getAllFyp} />
          </div>
        </div>
      ))}
    </>
  );
}
