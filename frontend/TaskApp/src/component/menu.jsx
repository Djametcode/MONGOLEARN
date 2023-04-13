import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/beranda");
  };
  const navigatesend = () => {
    navigate("/send");
  };
  const navigateProfile = () => {
    navigate("/profile");
  };
  return (
    <div className=" flex justify-between bg-slate-100 p-3 gap-3 overflow-scroll font-quick">
      <div
        onClick={navigateHome}
        className=" cursor-pointer flex w-full justify-center bg-slate-300/30 rounded-lg text-black pr-1"
      >
        <p className=" p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </p>
        <div className=" flex flex-col justify-center">
          <p>Beranda</p>
        </div>
      </div>
      <div
        onClick={navigatesend}
        className=" cursor-pointer flex w-full justify-center bg-slate-300/30 rounded-lg text-black pr-1"
      >
        <p className=" p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
        </p>
        <div className=" flex flex-col justify-center pr-2">
          <p>Kirim</p>
        </div>
      </div>
      <div
        onClick={navigateProfile}
        className=" cursor-pointer flex w-full justify-center bg-slate-300/30 rounded-lg text-black pr-1"
      >
        <p className=" p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </p>
        <div className=" flex flex-col justify-center pr-2">
          <p>Profil</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
