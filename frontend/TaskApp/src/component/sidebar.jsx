import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" bg-slate-500 h-screen w-72 -z-30 p-2 rounded-tr-3xl rounded-br-3xl">
      <div className=" flex flex-col gap-4 p-2 translate-y-14">
        <div>
          <Link
            className=" bg-slate-200 rounded-xl p-1 text-black/75 font-quick"
            to="/"
          >
            Registrasi
          </Link>
        </div>
        <div>
          <Link
            className=" bg-slate-200 rounded-xl p-1 text-black/75 font-quick"
            to="/"
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            className=" bg-slate-200 rounded-xl p-1 text-black/75 font-quick"
            to="/"
          >
            Dark Mode
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
