import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentJsx from "./comment";

export const footerContext = createContext(null);

const FooterBeranda = ({ data, id, refresh, comments }) => {
  const navigate = useNavigate();
  const { like, _id } = data;
  //   console.log(like, _id);
  const [likes, setLike] = useState(like);
  const [comment, toggleComment] = useState(false);
  const givelike = {
    like: like + 1,
  };
  const addlike = async () => {
    try {
      await axios.post(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/u/list/${id}`,
        givelike
      );
      await setLike(like + 1);
      await refresh();
    } catch (error) {
      console.log(error);
    }
  };
  const commentHandle = () => {
    toggleComment(true);
    console.log(id);
  };
  return (
    <>
      <div className=" bg-slate-100 rounded-b-2xl flex flex-col justify-center h-10">
        <div className=" relative flex justify-evenly p-2">
          <div onClick={addlike} className=" cursor-pointer flex gap-1">
            <svg
              style={{ color: "black" }}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className=" w-7 h-7"
            >
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
            </svg>
            <div className=" flex flex-col justify-center font-quick text-black">
              <p>{likes}</p>
            </div>
          </div>
          <div onClick={commentHandle}>
            <svg
              style={{ color: "black" }}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className=" w-7 h-7"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </div>
          <div>
            <svg
              fill="black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className=" w-7 h-7"
            >
              <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
            </svg>
          </div>
        </div>
      </div>
      <div className=" fixed bottom-0 w-screen z-30">
        <footerContext.Provider value={{ toggleComment, id, comments }}>
          {comment && <CommentJsx />}
        </footerContext.Provider>
      </div>
    </>
  );
};

export default FooterBeranda;
