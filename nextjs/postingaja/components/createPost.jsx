import { useEffect } from "react";

export default function CreatePost({ toggle }) {
  const togglePost = () => {
    toggle(true);
  };
  return (
    <div
      onClick={togglePost}
      className=" text-white flex justify-center gap-3 bg-cyan-500 p-3 rounded-xl shadow-xl cursor-pointer"
    >
      <div className=" text-sm flex flex-col justify-center">
        <p>New Post</p>
      </div>
      <div className=" flex justify-center">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className=" w-7 h-7"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          />
        </svg>
      </div>
    </div>
  );
}
