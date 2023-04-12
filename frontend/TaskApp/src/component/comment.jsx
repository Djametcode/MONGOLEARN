import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { footerContext } from "./footerberanda";

const ListComment = ({ datas }) => {
  const result = datas.map((item) => <p>{item.comment}</p>);
  return <div>{result}</div>;
};
const CommentJsx = () => {
  const commentref = useRef();
  const { toggleComment, id } = useContext(footerContext);
  const [comment, setComment] = useState([]);
  const [sendComment, setCommentData] = useState("");
  const close = () => {
    toggleComment(false);
  };
  const handleChange = () => {
    setCommentData(commentref.current.value);
  };
  const data = {
    comment: sendComment,
  };

  console.log(data);
  const postcomment = async () => {
    try {
      await axios.post(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/u/comment/${id}`,
        data
      );
      getAllComment();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllComment = async () => {
    try {
      const response = await axios.get(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/u/comment/${id}`
      );
      const item = response.data;
      const { data } = item;
      setComment(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllComment();
  }, []);
  return (
    <div className=" flex flex-col gap-5 -translate-y-7 bg-slate-300/30 p-3 rounded-lg">
      <div className=" flex justify-between">
        <div className=" flex justify-center">
          <form className=" flex gap-2">
            <input
              ref={commentref}
              className=" focus:outline-none p-2 rounded-lg"
              type="text"
              placeholder="Tulis komentar"
              onChange={handleChange}
            />
            <div className=" flex flex-col justify-center">
              <button
                onClick={postcomment}
                className=" bg-slate-300/20 p-2 rounded-lg"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
        <div className=" flex flex-col justify-center">
          <button className=" bg-slate-300/20 p-1 rounded-lg" onClick={close}>
            Close
          </button>
        </div>
      </div>
      <div className=" bg-slate-300/30 p-3 rounded-lg">
        <p>List komentar :</p>
        <ListComment datas={comment} />
      </div>
    </div>
  );
};

export default CommentJsx;
