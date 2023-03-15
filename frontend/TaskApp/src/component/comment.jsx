import { useContext } from "react";
import { footerContext } from "./footerberanda";

const CommentJsx = () => {
  const { toggleComment } = useContext(footerContext);
  const close = () => {
    toggleComment(false);
  };
  return (
    <div className=" -translate-y-7 bg-slate-300/30 p-3 rounded-lg">
      <div className=" flex justify-between">
        <h2>Komentar</h2>
        <button onClick={close}>Close</button>
      </div>
      <div>
        <p>List komentar</p>
      </div>
    </div>
  );
};

export default CommentJsx;
