import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function FooterFyp({ text, like, id, comment, date }) {
  const [likes, setLike] = useState(like);
  const [dummyLike, setDummy] = useState(like);
  const [icon, setIcon] = useState(0);
  const data = {
    like: likes + 1,
  };
  function getTimeAgo(dates) {
    const datex = new Date(dates);
    const now = new Date();

    const seconds = Math.floor((now - datex) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days + " hari" + (days > 1 ? "" : "") + " yang lalu";
    } else if (hours > 0) {
      return hours + " jam" + (hours > 1 ? "" : "") + " yang lalu";
    } else if (minutes > 0) {
      return minutes + " menit" + (minutes > 1 ? "" : "") + " yang lalu";
    } else {
      return seconds + " detik" + (seconds > 1 ? "" : "") + " yang lalu";
    }
  }

  const timeAgo = getTimeAgo(date);
  const icons = [
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className=" w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>,
    <svg
      fill="red"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className=" w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>,
  ];
  const addLike = async () => {
    try {
      await console.log(id);
      const response = await axios.post(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/u/like/${id}`,
        data
      );
      const result = await response.data;
      setDummy(like + 1);
      setIcon(1);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex flex-col gap-2">
      <div className=" flex gap-3 md:pt-5">
        <div onClick={addLike} className=" cursor-pointer">
          {icons[icon]}
        </div>
        <div>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className=" w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
        </div>
        <div>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className=" w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </div>
      </div>
      <div className=" text-sm pl-1">
        <p>{dummyLike} suka</p>
        <p>{text}</p>
        <p className=" text-xs text-stone-700/80">
          {comment.length} komentar ....
        </p>
        <p className=" text-xs pt-3 text-stone-700/80">{timeAgo}</p>
      </div>
      <div></div>
    </div>
  );
}
